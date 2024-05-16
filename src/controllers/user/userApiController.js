import userController from "./userController.js";
/**
 * @module /controllers/user/userApiController
 */

/**
 * Asynchronously registers a user with the provided email, password, and password repeat.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with error or data based on registration success
 */
async function register(req,res) {
    const {email,password,passwordRepeat} = req.body;
    const {error,data} = await userController.register(email,password,passwordRepeat);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
    }
}

/**
 * Asynchronously logs in a user with the provided email and password.
 *
 * @param {Object} req - The request object containing user email and password
 * @param {Object} res - The response object used to send JSON response based on login success
 * @return {void} Sends a JSON response with error or user data upon login
 */
async function login(req,res) {
    const {email,password} = req.body;
    const {error,data} = await userController.login(email,password);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
    }
}

/**
 * Asynchronously retrieves all users and sends the response as JSON.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with the retrieved users
 */
async function getAll(req,res){
    const {data:users} = await userController.getAll();
    res.json(users);
}
export {
    register,
    login,
    getAll
}

export default {
    register,
    login,
    getAll
}