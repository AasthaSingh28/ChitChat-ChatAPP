import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res,next)=>{
    try{
       const tok = req.cookies.jwt;
       if(!tok){
        return res.status(401).json({error:"Unauthorized user- No Token Provided"});
       }
      

       const decoded = jwt.verify(tok, process.env.JWT_KEYSECRET);

       if(!decoded){
        return res.status(401).json({error:"Unauthorized - Invalid Token"});
       }

       const user = await User.findById(decoded.userId).select("-password");

       if(!user){
        return res.status(404).json({error:"User not found!"});
       }

       req.user = user;

       next();


    }
    catch(error){
        console.log("Error in protect Route", error.message);

        res.status(500). json({error: "Internal Server Error"});
    }
};

export default protectRoute;