const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            github: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Endereco, { foreignKey: 'user_id', as: 'enderecos' });                                                                                              /* const Creator = mxxcxn was here */
        this.hasOne(models.Cargo, { foreignKey: 'profissao', as: 'cargos' });                                                                                              /* const Creator = mxxcxn was here */
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });                                                                                              /* const Creator = mxxcxn was here */
    }


}

module.exports = User;