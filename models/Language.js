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
        },
        // mentor_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'mentor',
        //         key: 'id'
        //     }
        // }
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