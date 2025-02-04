import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const MONGODB_URI ="mongodb+srv://satisfaction579:1234@cluster0.dmjur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
if(!MONGODB_URI){
    throw new Error(
        "Please provide MONGODB_URI in the .env file"
    )
}

async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("connect DB")
    } catch (error) {
        console.log("Mongodb connect error",error)
        process.exit(1)
    }
}

export default connectDB