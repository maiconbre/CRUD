const express = require ('express');

const EnderecoController = require('./controllers/EnderecoController');
const UserController = require('./controllers/UserController');
const SedeController = require ('./controllers/SedeController');
const CargoController = require('./controllers/CargoController')
const TechController = require('./controllers/TechController')

const routes = express.Router();

//Metodos CRUD dos Usuarios
routes.get('/users/:id', UserController.indexOne);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

//Metodos CRUD dos Endereços
routes.get('/users/:user_id/enderecos', EnderecoController.index);
routes.post('/users/:user_id/enderecos', EnderecoController.store);
routes.put('/users/:user_id/enderecos/:id', EnderecoController.update);
routes.delete('/users/:user_id/enderecos/:id', EnderecoController.delete);


//Metodos CRUD das Sedes
routes.get('/sedes', SedeController.index);
routes.post('/sedes', SedeController.store);
routes.put('/sedes/:id', SedeController.update);
routes.delete('/sedes/:id', SedeController.delete);


//Metodos CRUD dos Cargos
routes.get('/users/:user_id/cargos', CargoController.index);
routes.post('/users/:user_id/cargos', CargoController.store);
routes.put('/users/:user_id/cargos', CargoController.update);
routes.delete('/users/:user_id/cargos', CargoController.delete);


//Metodos CRUD das Tecnologias
routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs/:id', TechController.delete);


module.exports = routes;