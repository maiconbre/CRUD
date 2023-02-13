const { Model, DataTypes } = require('sequelize');

class Medico extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            CRM: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Medico;