import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        const adminPassword = process.env.ADMIN_PASSWORD || "admin123"; // Fallback for dev

        if (password === adminPassword) {
            const cookieStore = await cookies();

            // Set a simple session cookie
            cookieStore.set("admin_session", "authenticated", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 60 * 60 * 24, // 24 hours
                path: "/",
            });

            return NextResponse.json({ success: true, message: "Login successful" });
        }

        return NextResponse.json(
            { success: false, error: "Invalid password" },
            { status: 401 }
        );
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
