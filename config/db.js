import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config({
    path: './.env'
});

async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`\n MongoDB connected!`);
    } catch (error) {
        console.log("MONGODB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;