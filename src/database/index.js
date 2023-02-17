const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Endereco = require('../models/Endereco');
const Sede = require('../models/Sede')
const Cargo = require('../models/Cargo')
const Tech = require('../models/Tech')


const connection = new Sequelize(dbConfig);

User.init(connection);
Endereco.init(connection);
Sede.init(connection);
Cargo.init(connection);
Tech.init(connection);


User.associate(connection.models);
Endereco.associate(connection.models);
Cargo.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;