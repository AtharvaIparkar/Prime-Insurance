import mongoose from "mongoose";

// ─── Environment variable check ─────────────────────────────────────────────
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

// ─── Global cache to prevent multiple connections in development ─────────────
// In development, Next.js hot-reloads and re-evaluates modules. Without this
// cache, every reload would create a NEW connection to MongoDB.
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? { conn: null, promise: null };

if (!global.mongooseCache) {
    global.mongooseCache = cached;
}

// ─── Connection function ────────────────────────────────────────────────────
async function connectDB(): Promise<typeof mongoose> {
    // Return existing connection if available
    if (cached.conn) {
        return cached.conn;
    }

    // Create new connection promise if one doesn't exist
    if (!cached.promise) {
        const opts: mongoose.ConnectOptions = {
            bufferCommands: false,       // Disable buffering — fail fast if not connected
            maxPoolSize: 10,             // Max number of sockets in the connection pool
            serverSelectionTimeoutMS: 5000,  // Timeout after 5s if can't find server
            socketTimeoutMS: 45000,      // Close sockets after 45s of inactivity
        };

        cached.promise = mongoose
            .connect(MONGODB_URI as string, opts)
            .then((mongooseInstance) => {
                console.log("MongoDB connected successfully");
                return mongooseInstance;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        // Reset the promise so we can retry on the next request
        cached.promise = null;
        console.error("MongoDB connection failed:", error);
        throw error;
    }

    return cached.conn;
}

export default connectDB;
