import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import validator from "validator";

// ─── Rate limiting (in-memory, per-IP) ──────────────────────────────────────
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;         // Max 5 submissions
const RATE_LIMIT_WINDOW = 60000;  // Per 60 seconds

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimit.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (entry.count >= RATE_LIMIT_MAX) {
        return true;
    }

    entry.count++;
    return false;
}

// ─── Sanitize user input to prevent XSS ─────────────────────────────────────
function sanitize(input: string): string {
    return validator.escape(validator.trim(input));
}

// ─── CORS Headers ───────────────────────────────────────────────────────────
function corsHeaders() {
    return {
        "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
}

// ─── OPTIONS (Preflight) ────────────────────────────────────────────────────
export async function OPTIONS() {
    return NextResponse.json(null, { status: 204, headers: corsHeaders() });
}

// ═══════════════════════════════════════════════════════════════════════════════
// POST /api/consultation — Create a new consultation request
// ═══════════════════════════════════════════════════════════════════════════════
export async function POST(request: NextRequest) {
    try {
        // ── Rate limiting ────────────────────────────────────────────────────
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            "unknown";

        if (isRateLimited(ip)) {
            console.warn(`⚠️ Rate limit exceeded for IP: ${ip}`);
            return NextResponse.json(
                {
                    success: false,
                    error: "Too many requests. Please try again in a minute.",
                },
                { status: 429, headers: corsHeaders() }
            );
        }

        // ── Parse request body ───────────────────────────────────────────────
        let body;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { success: false, error: "Invalid JSON in request body." },
                { status: 400, headers: corsHeaders() }
            );
        }

        const { name, email, phone, service, hospitalName, state, district, pincode, preferredDate, message } = body;

        // ── Field-level validation ───────────────────────────────────────────
        const errors: Record<string, string> = {};

        if (!name || typeof name !== "string" || name.trim().length < 2) {
            errors.name = "Full name is required (min 2 characters).";
        }

        if (!email || typeof email !== "string" || !validator.isEmail(email)) {
            errors.email = "A valid email address is required.";
        }

        if (
            !phone ||
            typeof phone !== "string" ||
            !validator.isMobilePhone(phone.replace(/[\s\-()]/g, ""), "any")
        ) {
            errors.phone = "A valid phone number is required.";
        }

        const validServices = [
            "Insurance & TPA Cashless Empanelment",
            "NABH and NABL Accreditation",
            "Cashless Management",
            "IT Solutions",
            "Hospital Marketing",
        ];
        if (!service || !validServices.includes(service)) {
            errors.service = "Please select a valid service.";
        }

        if (!hospitalName || typeof hospitalName !== "string" || hospitalName.trim().length < 3) {
            errors.hospitalName = "Hospital name is required (min 3 characters).";
        }

        if (!state || typeof state !== "string" || state.trim().length === 0) {
            errors.state = "State is required.";
        }

        if (!district || typeof district !== "string" || district.trim().length === 0) {
            errors.district = "District is required.";
        }

        if (!pincode || typeof pincode !== "string" || !/^[1-9]\d{5}$/.test(pincode)) {
            errors.pincode = "A valid 6-digit pincode is required (cannot start with 0).";
        }

        if (message && typeof message === "string" && message.length > 2000) {
            errors.message = "Message must be less than 2000 characters.";
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                { success: false, error: "Validation failed.", details: errors },
                { status: 422, headers: corsHeaders() }
            );
        }

        // ── Connect to MongoDB ───────────────────────────────────────────────
        await connectDB();

        // ── Create consultation document with sanitized data ─────────────────
        const consultation = await Consultation.create({
            name: sanitize(name),
            email: validator.normalizeEmail(email) || email.toLowerCase().trim(),
            phone: sanitize(phone),
            service: service.trim(),
            hospitalName: sanitize(hospitalName),
            state: state.trim(),
            district: district.trim(),
            pincode: pincode.trim(),
            preferredDate: preferredDate ? sanitize(String(preferredDate)) : "",
            message: message ? sanitize(message) : "",
            status: "pending",
            ipAddress: ip,
            userAgent: request.headers.get("user-agent") || "",
        });

        console.log(`📋 New consultation created: ${consultation._id}`);

        return NextResponse.json(
            {
                success: true,
                message: "Consultation request submitted successfully!",
                data: {
                    id: consultation._id,
                    name: consultation.name,
                    email: consultation.email,
                    service: consultation.service,
                    status: consultation.status,
                    createdAt: consultation.createdAt,
                },
            },
            { status: 201, headers: corsHeaders() }
        );
    } catch (error: unknown) {
        // ── Handle Mongoose validation errors ─────────────────────────────────
        if (error instanceof Error && error.name === "ValidationError") {
            const mongooseError = error as mongoose.Error.ValidationError;
            const details: Record<string, string> = {};
            for (const key of Object.keys(mongooseError.errors)) {
                details[key] = mongooseError.errors[key].message;
            }
            return NextResponse.json(
                { success: false, error: "Validation failed.", details },
                { status: 422, headers: corsHeaders() }
            );
        }

        console.error("❌ API Error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Internal server error. Please try again later.",
            },
            { status: 500, headers: corsHeaders() }
        );
    }
}

// We need a type import for Mongoose validation errors
import mongoose from "mongoose";

import { cookies } from "next/headers";

// ═══════════════════════════════════════════════════════════════════════════════
// GET /api/consultation — Retrieve consultation requests (protected)
// ═══════════════════════════════════════════════════════════════════════════════
export async function GET(request: NextRequest) {
    try {
        // ── Auth check (API key or Session Cookie) ───────────────────────────
        const authHeader = request.headers.get("authorization");
        const apiKey = process.env.ADMIN_API_KEY;

        const cookieStore = await cookies();
        const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

        const hasValidApiKey = apiKey && authHeader === `Bearer ${apiKey}`;

        if (!hasValidApiKey && !isAuthenticated) {
            return NextResponse.json(
                { success: false, error: "Unauthorized. Please log in or provide a valid API key." },
                { status: 401, headers: corsHeaders() }
            );
        }

        // ── Connect to MongoDB ───────────────────────────────────────────────
        await connectDB();

        // ── Query parameters for filtering ───────────────────────────────────
        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status");
        const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
        const skip = (page - 1) * limit;

        // Build filter
        const filter: Record<string, string> = {};
        if (status && ["pending", "contacted", "completed", "cancelled"].includes(status)) {
            filter.status = status;
        }

        // ── Fetch consultations ──────────────────────────────────────────────
        const [consultations, total] = await Promise.all([
            Consultation.find(filter)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .select("-ipAddress -userAgent -__v")
                .lean(),
            Consultation.countDocuments(filter),
        ]);

        return NextResponse.json(
            {
                success: true,
                data: consultations,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit),
                },
            },
            { status: 200, headers: corsHeaders() }
        );
    } catch (error) {
        console.error("❌ GET Error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Internal server error. Please try again later.",
            },
            { status: 500, headers: corsHeaders() }
        );
    }
}
// ═══════════════════════════════════════════════════════════════════════════════
// PATCH /api/consultation — Update consultation status (protected)
// ═══════════════════════════════════════════════════════════════════════════════
export async function PATCH(request: NextRequest) {
    try {
        // ── Auth check (API key or Session Cookie) ───────────────────────────
        const authHeader = request.headers.get("authorization");
        const apiKey = process.env.ADMIN_API_KEY;

        const cookieStore = await cookies();
        const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

        const hasValidApiKey = apiKey && authHeader === `Bearer ${apiKey}`;

        if (!hasValidApiKey && !isAuthenticated) {
            return NextResponse.json(
                { success: false, error: "Unauthorized. Please log in or provide a valid API key." },
                { status: 401, headers: corsHeaders() }
            );
        }

        // ── Parse request body ───────────────────────────────────────────────
        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json(
                { success: false, error: "ID and status are required." },
                { status: 400, headers: corsHeaders() }
            );
        }

        const validStatuses = ["pending", "contacted", "completed", "cancelled"];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { success: false, error: "Invalid status value." },
                { status: 400, headers: corsHeaders() }
            );
        }

        // ── Connect to MongoDB ───────────────────────────────────────────────
        await connectDB();

        // ── Update consultation ─────────────────────────────────────────────
        const consultation = await Consultation.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!consultation) {
            return NextResponse.json(
                { success: false, error: "Consultation not found." },
                { status: 404, headers: corsHeaders() }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Status updated successfully.",
                data: consultation,
            },
            { status: 200, headers: corsHeaders() }
        );
    } catch (error) {
        console.error("❌ PATCH Error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Internal server error. Please try again later.",
            },
            { status: 500, headers: corsHeaders() }
        );
    }
}
