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
        this.hasMany(models.Consulta, { foreignKey: 'user_id', as: 'consultas' });                                                                                              /* const Creator = mxxcxn was here */
    }
    
    static associate(models) {
        this.hasOne(models.Cargo, { foreignKey: 'profissao', as: 'cargos' });                                                                                              /* const Creator = mxxcxn was here */
    }
}
User.associate = (models) => {
    User.hasMany(models.Consulta, {
        foreignKey: 'user_id',
        as: 'consultas',
        onDelete: 'CASCADE',
    });

    User.hasOne(models.Cargo, {
        foreignKey: 'user_id',
        as: 'cargos',
        onDelete: 'CASCADE',
    });
}

module.exports = User;