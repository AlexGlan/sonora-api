import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to the database at: ${conn.connection.host}`);        
    } catch (error) {
        console.error(`Unable to connect to the database: ${error.message}`);
        process.exit(1);
    }
}
