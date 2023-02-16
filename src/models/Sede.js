const { Model, DataTypes } = require('sequelize');

class Sede extends Model {
    static init(sequelize) {
        super.init({
            equipe: DataTypes.STRING,
            retorno: DataTypes.STRING,
            cidade: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cep: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    
}

module.exports = Sede;