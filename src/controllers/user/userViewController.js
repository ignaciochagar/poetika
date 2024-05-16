import userController from "./userController.js";

async function registerForm(req,res){
    res.render("user/register");
}

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

async function loginForm(req,res){
    res.render("index");
}


async function loginIndex(req,res) {
    const {email,password} = req.body;
    const {error,data} = await userController.login(email,password);
    if(!error){
        req.session.user = data;
        res.redirect("/author");
    }
    else{
        res.render("index",{error});
    }
}

async function logout(req,res){
    req.session.user = null;
    res.redirect("/");
}

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