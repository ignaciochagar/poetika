import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
/**
 * @module /controllers/user/userController
 */

/**
 * Asynchronously retrieves all users.
 *
 * @return {Object} An object containing the data array of users
 */
async function getAll() {
    try {
        const users = await userModel.findAll();
        return { data: users };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

/**
 * Asynchronously retrieves a user by ID.
 *
 * @param {number} id - The ID of the user to retrieve
 * @return {Object} An object containing the retrieved user data or an error object
 */
async function getById(id) {
    try {
        const user = await userModel.findByPk(id);
        if (!user) {
            return { error: "El user no existe" };
        }
        return { data: user };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

/**
 * Asynchronously retrieves a user by email.
 *
 * @param {string} email - The email of the user to retrieve
 * @return {Object} An object containing the retrieved user data or an error object
 */
async function getByEmail(email){
    try {
        const user = await userModel.findOne({where:{email:email}})
        return {data:user};
    } catch (error) {
        console.error(error);
        return {error};
    }
}

/**
 * Asynchronously creates a new user based on the provided userData.
 *
 * @param {Object} userData - The data of the user to be created
 * @return {Object} An object containing the data of the newly created user or an error object
 */
async function create(userData) {
    try {
        const newuser = await userModel.create(userData);
        console.log("new user",newuser);
        return {data:newuser};
    } catch (error) {
        console.error(error);
        return {error}
    }
}
/**
 * Asynchronously registers a user with the provided email, password, and password repeat.
 *
 * @param {string} email - The email of the user to register
 * @param {string} password - The password of the user to register
 * @param {string} passwordRepeat - The repeated password for confirmation
 * @return {Object} An object containing the newly registered user data or an error object
 */
async function register(email,password,passwordRepeat){
    try {
        if(!email || !password || !passwordRepeat){
            return {error:"falta email o contraseña"};
        }
        if(password !== passwordRepeat){
            return {error:"las contraseñas no coinciden"};
        }
        const {data:oldUser} = await getByEmail(email);
        console.log("old user",oldUser)
        if(oldUser){
            return {error:"el usuario ya existe"};
        }
        const hash = await bcrypt.hash(password,10);
        const userData = {
            email,
            password:hash
        }
        const newUser = await create(userData);
        return {data:newUser};
    } catch (error) {
        console.error(error);
        return {error:"ha habido un error en el registro"}
    }
}

/**
 * Asynchronously logs in a user with the provided email and password.
 *
 * @param {string} email - The email of the user trying to log in
 * @param {string} password - The password of the user trying to log in
 * @return {Object} An object containing either the logged-in user data and token or an error object
 */
async function login(email,password){
    try {
        if(!email || !password ){       
            return {error:"falta email o contraseña"};
        }
        const {data:oldUser} = await getByEmail(email);
        if(!oldUser){     
            return {error:"la combinación de usuario y contraseña es errónea"};
        }
        const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
        if(isPasswordCorrect){
            const token = jwt.sign({id:oldUser.user_id,email:oldUser.email},process.env.JWT_SECRET,{expiresIn: 60 * 60})
            return {data:"El usuario se ha logueado correctamente",token};
        }
        else{
            return {error:"la combinación de usuario y contraseña es errónea"}
        }
    } catch (error) {
        console.error(error);
        return {error:"Ha habido un error en el login"}
    }
}
/**
 * Asynchronously updates a user based on the provided ID and userData.
 *
 * @param {number} id - The ID of the user to update
 * @param {Object} userData - The data containing the updated user information
 * @return {Object} An object containing the updated user data or an error object
 */
async function update(id, userData) {
    try {
        const newuser = await userModel.update(userData,
            {
                where: 
                {
                    user_id:id
                }
            }
        );
        return {data:newuser};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

/**
 * Asynchronously removes a user based on the provided ID.
 *
 * @param {number} id - The ID of the user to remove
 * @return {Object} An object containing the removed user data
 */
async function remove(id) {
    try {
        const result = await userModel.remove(id);
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
}

export {
    getAll,
    getById,
    getByEmail,
    create,
    register,
    login,
    update,
    remove
};


export default {
    getAll,
    getById,
    getByEmail,
    create,
    register,
    login,
    update,
    remove
};