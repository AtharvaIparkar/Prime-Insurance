import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        hospitalName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        serviceUsed: {
            type: String,
            required: true,
        },
        reviewTitle: {
            type: String,
            required: true,
        },
        reviewText: {
            type: String,
            required: true,
        },
        wouldRecommend: {
            type: Boolean,
            default: true,
        },
        email: {
            type: String,
            required: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/, "Please provide a valid email address"],
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending',
        },
        verified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt
    }
);

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
