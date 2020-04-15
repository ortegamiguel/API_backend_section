const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');
const swaggerUI = require('swagger-ui-express');
const {SWAGGER_PATH} = require('../config');
const swaggerDocument = require(SWAGGER_PATH);

module.exports = function({ HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes }) {
    const router = express.Router();
    const apiRoutes = express.Router();


    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes
        .use('/home', HomeRoutes)
        .use('/user', UserRoutes)
        .use('/idea', IdeaRoutes)
        .use('/comment', CommentRoutes)
        .use('/auth', AuthRoutes);

    router.use('/v1/api', apiRoutes);
    router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

    router.use(ErrorMiddleware);
    router.use(NotFoundMiddleware);

    return router;
}