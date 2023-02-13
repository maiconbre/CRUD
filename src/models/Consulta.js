const { Model, DataTypes } = require('sequelize');

class Consulta extends Model {
    static init(sequelize) {
        super.init({
            medico: DataTypes.STRING,
            receita: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Consulta;