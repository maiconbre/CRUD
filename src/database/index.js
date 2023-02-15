const Sequelize = require ('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Consulta = require('../models/Consulta');
const Cargo = require('../models/Cargo')


const connection = new Sequelize(dbConfig);

User.init(connection);
Consulta.init(connection);
Cargo.init(connection)


User.associate(connection.models);
Consulta.associate(connection.models);
Cargo.associate(connection.models)


module.exports = connection;