import jwt from "jsonwebtoken";
/**
 * @module /middlewares/authMiddleware
 */

/**
 * Middleware to check if the token in the request header is correct.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
function isTokenCorrect (req,res,next){
    try {
        const authorization = req.headers.authorization;
        if(!authorization){
            return res.status(401).json({error:"no hay token jwt"});
        }
        const token = authorization.split("Bearer ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({error:"error verificando token, puede haber caducado"});
    }
}

/**
 * Middleware to check if the user has an active session.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @return {void}
 */
function hasSession(req,res,next){
    return next();
    const user = req.session.user;
    console.log("session user",req.session);
    if(!user){
        return res.redirect("/login");
    }
    next();
}
export{isTokenCorrect,hasSession};

export default {isTokenCorrect,hasSession};