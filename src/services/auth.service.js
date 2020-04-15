const { generateToken } = require('../helpers/jwt.heper');
let _userService = null;

class AuthService {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async signUp(user){
        const {username} = user;
        console.log('username ', username);
        const userExist = await _userService.getUserByUsername(username);
        if(userExist){
            const error = new Error();
            error.status = 400;
            error.message = 'User already exists';
            throw error;
        }
        console.log('no hay error', userExist);
        return await _userService.create(user);
    }

    async signIn(user){
        const {username, password} = user; 
        const userExist = await _userService.getUserByUsername(username);
        if(!userExist){
            const error = new Error();
            error.status = 404;
            error.message = 'User does not exists';
            throw error;
        }

        const validPassword = userExist.comparePasswords(password);
        if(!validPassword) {
            const error = new Error();
            error.status = 400;
            error.message = 'Invalid password';
            throw error;
        }

        const userToEncode = {
            username: userExist.username,
            id: userExist._id
        }

        const token = generateToken(userToEncode);

        return { token, user: userExist }
    }
}

module.exports = AuthService;