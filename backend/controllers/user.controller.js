import User from "../models/user.model.js";

export const getUserForSidebar = async(req, res)=>{
    try{
        const loggedUserId = req.user._id;

        const allUsers = await User.find().select("-password");

        res.status(200).json(allUsers);
    }
    catch(error){
        console.log("Error in get user for sidebar function", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}