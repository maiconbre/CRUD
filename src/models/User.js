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
    }

    static associate(models) {
        this.hasOne(models.Cargo, { foreignKey: 'profissao', as: 'cargos' });                                                                                              /* const Creator = mxxcxn was here */
    }
}

User.associate = (models) => {
    User.hasMany(models.Endereco, {
        foreignKey: 'user_id',
        as: 'enderecos',
        onDelete: 'CASCADE',
    });

    User.hasOne(models.Cargo, {
        foreignKey: 'user_id',
        as: 'cargos',
        onDelete: 'CASCADE',
    });

}

module.exports = User;