const Sequelize = require ('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Consulta = require('../models/Consulta');
const Medico = require('../models/Medico');

const connection = new Sequelize(dbConfig);

User.init(connection);
Consulta.init(connection);
Medico.init(connection);

User.associate(connection.models);
Consulta.associate(connection.models);


module.exports = connection;