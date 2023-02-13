const express = require ('express');

const ConsultaController = require('./controllers/ConsultaController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/consultas', ConsultaController.store);


module.exports = routes;