const { Model, DataTypes } = require('sequelize');

class Cargo extends Model {
    static init(sequelize) {
        super.init({
            profissao: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Cargo;