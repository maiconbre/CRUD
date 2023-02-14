const express = require ('express');

const EnderecoController = require('./controllers/EnderecoController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/users/:user_id/endereco', EnderecoController.store);
routes.get('/users/:user_id/endereco', EnderecoController.index);


module.exports = routes;