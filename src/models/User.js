const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Endereco, { foreignKey: 'user_id', as: 'enderecos' });                                                                                              /* const Creator = mxxcxn was here */
    }
}
User.associate = (models) => {
    User.hasMany(models.Endereco, {
        foreignKey: 'user_id',
        as: 'enderecos',
        onDelete: 'CASCADE',
    });

   
}

module.exports = User;