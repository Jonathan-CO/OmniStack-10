const {Router} = require('express');
const DevController = require('./controllers/DevController')

const routes = Router();

routes.post('/devs', DevController.create);

module.exports = routes;