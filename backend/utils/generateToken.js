import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRETS,{
        expiresIn :'20d'
    })

    res.cookie("jwt", token,{
        maxAge: 20 *24*60*60*10000,//MS
        httpOnly : true ,  //prevent xss attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks crosse-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });

};

export default generateTokenAndSetCookie;