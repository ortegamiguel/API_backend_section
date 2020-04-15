let _authService = null;

class AuthController {
    constructor({AuthService}){
        _authService = AuthService;
    }

    async singUp(req, res){
        const {body} = req;
        const createdUser = await _authService.signUp(body);
        return res.status(201).send(createdUser);
    }

    async singIn(req, res){
        const {body} = req;
        const createdUser = await _authService.signIn(body);
        return res.send(createdUser);
    }
}

module.exports = AuthController;