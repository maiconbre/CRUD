const express = require ('express');

const ConsultaController = require('./controllers/ConsultaController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/users/:user_id/consultas', ConsultaController.store);
routes.get('/users/:user_id/consultas', ConsultaController.index);

routes.get('/users/:id/cargos', UserController.index);
routes.put('/users/:id/cargos', UserController.update);
routes.post('/users:id/cargos', UserController.store);
routes.delete('/users/:id/cargos', UserController.delete);


module.exports = routes;