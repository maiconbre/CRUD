const express = require ('express');

const UserController = require('./controllers/UserController');
const CargoController = require('./controllers/CargoController')

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/users/:user_id/cargos', CargoController.store);
routes.get('/users/:user_id/cargos', CargoController.index);
routes.put('/users/:user_id/cargos', CargoController.update);
routes.delete('/users/:user_id/cargos', CargoController.delete);


module.exports = routes;