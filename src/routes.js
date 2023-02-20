const express = require('express');

const EnderecoController = require('./controllers/EnderecoController');
const UserController = require('./controllers/UserController');
const SedeController = require('./controllers/SedeController');
const CargoController = require('./controllers/CargoController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/users/:user_id/enderecos', EnderecoController.index);
routes.post('/users/:user_id/enderecos', EnderecoController.store);
routes.put('/users/:user_id/enderecos/:id', EnderecoController.update);
routes.delete('/users/:user_id/enderecos/:id', EnderecoController.delete);

routes.get('/sedes', SedeController.index);
routes.post('/sedes', SedeController.store);
routes.put('/sedes/:id', SedeController.update);
routes.delete('/sedes/:id', SedeController.delete);

routes.post('/users/:user_id/cargos', CargoController.store);
routes.get('/users/:user_id/cargos', CargoController.index);
routes.put('/users/:user_id/cargos', CargoController.update);
routes.delete('/users/:user_id/cargos', CargoController.delete);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs/:id', TechController.delete)

module.exports = routes;