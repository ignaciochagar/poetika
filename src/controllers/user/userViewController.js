import userController from "./userController.js";

/**
 * @module /controllers/user/userViewController
 */

/**
 * Renders the user registration form.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the user registration form view
 */
async function registerForm(req,res){
    res.render("user/register");
}
/**
 * Asynchronously registers a user with the provided email, password, and password repeat.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {void} Renders the registration form with an error or redirects to /login upon successful registration
 */
async function register(req,res) {
    const {email,password,passwordRepeat} = req.body;
    const {error,data} = await userController.register(email,password,passwordRepeat);
    if(error){
        res.render("user/register",{error});
    }
    else{
        res.redirect("/");
    }
}
/**
 * Renders the user login form.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the user login form view
 */
async function loginForm(req,res){
    res.render("index");
}
/**
 * Asynchronously logs in a user with the provided email and password.
 *
 * @param {Object} req - The request object containing user email and password
 * @param {Object} res - The response object used to send JSON response based on login success
 * @return {void}
 */
async function loginIndex(req,res) {
    const {email,password} = req.body;
    const {error,data} = await userController.login(email,password);
    if(!error){
        req.session.user = data;
        res.redirect("/author");
    } else {
        let email = req.body['email'];
        if (email !== undefined) {
            res.render("index",{error});
        } else {
            res.render("index",{});
        }
    }
}

/**
 * Logs out the user by setting the session user to null and redirects to the author page.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Redirects to the author page
 */
async function logout(req,res){
    req.session.user = null;
    res.redirect("/");
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
    registerForm,
    loginForm,
    logout,
    getAll,
    loginIndex
}

export default {
    register,
    registerForm,
    loginForm,
    logout,
    getAll,
    loginIndex
}