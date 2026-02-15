import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";
import FeedbackTable from "@/components/admin/FeedbackTable";
import FeedbackExportButton from "@/components/admin/FeedbackExportButton";

export default async function AdminFeedbackPage() {
    const cookieStore = await cookies();
    const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

    if (!isAuthenticated) {
        redirect("/admin/login");
    }

    // Fetch all reviews
    await connectDB();
    const reviews = await Review.find({})
        .sort({ createdAt: -1 })
        .lean();

    // Map _id to string for the client component
    const serializedReviews = JSON.parse(JSON.stringify(reviews));

    return (
        <div className="p-8">
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Feedback & Reviews</h1>
                    <p className="text-slate-500 mt-2">Manage and moderate all customer feedback submissions.</p>
                </div>
                <div className="flex space-x-3">
                    <FeedbackExportButton />
                </div>
            </div>

            <FeedbackTable initialData={serializedReviews} />
        </div>
    );
}
