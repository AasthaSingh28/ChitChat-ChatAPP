import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb");
    }
    catch(err){
        console.log("Error connecting to mongodb", error.message);
    }

};

export default connectToMongoDB;