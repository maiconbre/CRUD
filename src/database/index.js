const Sequelize = require ('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Cargo = require('../models/Cargo')


const connection = new Sequelize(dbConfig);

User.init(connection);
Cargo.init(connection)


User.associate(connection.models);
Cargo.associate(connection.models)


module.exports = connection;