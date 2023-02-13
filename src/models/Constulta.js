const { Model, DataTypes } = require('sequelize');

class Consulta extends Model {
    static init(sequelize) {
        super.init({
            medico: DataTypes.STRING,
            receita: DataTypes.STRING,
            data: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = Consulta;