const {Router} = require('express');

module.exports = ({AuthController}) => {
    const router = Router();

    router.post('/signup', AuthController.singUp);
    router.post('/signin', AuthController.singIn);
    
    return router;
}