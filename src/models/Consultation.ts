import mongoose, { Schema, Document, Model } from "mongoose";

// ─── TypeScript interface for Consultation document ─────────────────────────
export interface IConsultation extends Document {
    name: string;
    email: string;
    phone: string;
    service: string;
    hospitalName: string;
    state: string;
    district: string;
    pincode: string;
    preferredDate?: string;
    message?: string;
    status: "pending" | "contacted" | "completed" | "cancelled";
    ipAddress?: string;
    userAgent?: string;
    createdAt: Date;
    updatedAt: Date;
}

// ─── Mongoose Schema ────────────────────────────────────────────────────────
const ConsultationSchema = new Schema<IConsultation>(
    {
        name: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [100, "Name must be less than 100 characters"],
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Please provide a valid email address",
            ],
        },

        phone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
            match: [
                /^[\d\s+\-()]{7,20}$/,
                "Please provide a valid phone number",
            ],
        },

        service: {
            type: String,
            required: [true, "Service type is required"],
            trim: true,
            enum: {
                values: [
                    "Insurance & TPA Cashless Empanelment",
                    "NABH and NABL Accreditation",
                    "Cashless Management",
                    "IT Solutions",
                    "Hospital Marketing",
                ],
                message: "Please select a valid service",
            },
        },

        hospitalName: {
            type: String,
            required: [true, "Hospital name is required"],
            trim: true,
            minlength: [3, "Hospital name must be at least 3 characters"],
            maxlength: [200, "Hospital name must be less than 200 characters"],
        },

        state: {
            type: String,
            required: [true, "State is required"],
            trim: true,
        },

        district: {
            type: String,
            required: [true, "District is required"],
            trim: true,
        },

        pincode: {
            type: String,
            required: [true, "Pincode is required"],
            trim: true,
            match: [/^[1-9]\d{5}$/, "Pincode must be exactly 6 digits and not start with 0"],
        },

        preferredDate: {
            type: String,
            trim: true,
            default: "",
        },

        message: {
            type: String,
            trim: true,
            maxlength: [2000, "Message must be less than 2000 characters"],
            default: "",
        },

        status: {
            type: String,
            enum: ["pending", "contacted", "completed", "cancelled"],
            default: "pending",
        },

        // ── Security metadata ───────────────────────────────────────────────
        ipAddress: {
            type: String,
            default: "",
        },

        userAgent: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

// ─── Indexes for efficient queries ──────────────────────────────────────────
ConsultationSchema.index({ email: 1 });
ConsultationSchema.index({ status: 1 });
ConsultationSchema.index({ createdAt: -1 });

// ─── Export model (prevent re-compilation in dev hot-reloads) ────────────────
const Consultation: Model<IConsultation> =
    mongoose.models.Consultation ||
    mongoose.model<IConsultation>("Consultation", ConsultationSchema);

export default Consultation;
