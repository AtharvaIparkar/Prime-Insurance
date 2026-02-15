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
            status: 'approved',
            verified: true,
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

// PATCH - Update review status (admin only)
export async function PATCH(request: NextRequest) {
    try {
        // Auth check
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();
        const isAuthenticated = cookieStore.get('admin_session')?.value === 'authenticated';

        const authHeader = request.headers.get('authorization');
        const apiKey = process.env.ADMIN_API_KEY;
        const hasValidApiKey = apiKey && authHeader === `Bearer ${apiKey}`;

        if (!hasValidApiKey && !isAuthenticated) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();

        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json({ error: 'ID and status are required' }, { status: 400 });
        }

        const validStatuses = ['pending', 'approved', 'rejected'];
        if (!validStatuses.includes(status)) {
            return NextResponse.json({ error: 'Invalid status value' }, { status: 400 });
        }

        // Auto-set verified when approved
        const updateData: any = { status };
        if (status === 'approved') {
            updateData.verified = true;
        } else {
            updateData.verified = false;
        }

        const review = await Review.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        if (!review) {
            return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Status updated successfully', data: review });
    } catch (error) {
        console.error('PATCH Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
