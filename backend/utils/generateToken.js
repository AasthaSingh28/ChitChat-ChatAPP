import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res)=>{
    const tok = jwt.sign({userId}, process.env.JWT_KEYSECRET,{
        expiresIn :'20d'
    })

   

    res.cookie("jwt", tok,{
        maxAge: 20*24*60*60*1000,//MS
        httpOnly : true ,  //prevent xss attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks crosse-site request forgery attacks
        secure: process.env.NODE_ENV !==  "dev"
    });

};

export default generateTokenAndSetCookie;