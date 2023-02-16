const express = require ('express');

const EnderecoController = require('./controllers/EnderecoController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/users/:user_id/enderecos', EnderecoController.index);
routes.post('/users/:user_id/enderecos', EnderecoController.store);
routes.put('/users/:user_id/enderecos/:id', EnderecoController.update);
routes.delete('/users/:user_id/enderecos/:id', EnderecoController.delete);


module.exports = routes;