import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Review from '@/models/Review';

// GET - Fetch all approved reviews
export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const rating = searchParams.get('rating');

        const query: any = { status: 'approved', verified: true };
        if (rating) {
            query.rating = parseInt(rating);
        }

        const reviews = await Review.find(query)
            .select('-email') // Don't expose email
            .sort({ createdAt: -1 })
            .limit(20);

        const total = await Review.countDocuments(query);

        // Calculate average rating
        const avgResult = await Review.aggregate([
            { $match: { status: 'approved', verified: true } },
            { $group: { _id: null, avgRating: { $avg: '$rating' } } },
        ]);

        const averageRating = avgResult.length > 0 ? avgResult[0].avgRating.toFixed(1) : 0;

        return NextResponse.json({
            reviews,
            total,
            averageRating: parseFloat(averageRating),
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}

// POST - Submit new review
export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const body = await request.json();

        const review = await Review.create({
            name: body.name,
            hospitalName: body.hospitalName,
            location: body.location,
            rating: body.rating,
            serviceUsed: body.serviceUsed,
            reviewTitle: body.reviewTitle,
            reviewText: body.reviewText,
            wouldRecommend: body.wouldRecommend,
            email: body.email,
            status: 'pending',
            verified: false,
        });

        return NextResponse.json(
            {
                message: 'Review submitted successfully',
                reviewId: review._id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating review:', error);
        return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
    }
}
