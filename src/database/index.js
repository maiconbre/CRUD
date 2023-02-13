const Sequelize = require ('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Consultas = require('../models/Constulta');
const Medicos = require('../models/Medico');

const connection = new Sequelize(dbConfig);

User.init(connection);
Consultas.init(connection);
Medicos.init(connection);

module.exports = connection;