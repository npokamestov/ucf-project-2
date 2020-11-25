const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model {};

Language.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'language'
    }
);

module.exports = Language;