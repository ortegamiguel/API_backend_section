//configurar el contenedor de injection de dependencia
const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('.');

//services
const { HomeService } = require('../services');

//Controllers
const { HomeController } = require('../controllers');

//routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//Models
const {User, Idea, Comment} = require('../models');

//Repositories
const { UserRepository, CommentRepository, IdeaRepository } = require('../repositories');

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(), 
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    }).register({    
        HomeService: asClass(HomeService).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton()
    });

module.exports = container;