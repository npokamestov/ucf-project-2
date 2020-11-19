const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mentor extends Model {
    static rate(body, models) {
        return models.Rate.create({
            user_id: body.user_id,
            mentor_id: body.mentor_id
        })
        .then(() => {
            return Mentor.findOne({
                where: {
                    id: body.mentor_id
                },
                attributes: [
                    'id',
                    'first_name',
                    'last_name',
                    'email',
                    [
                        sequelize.literal('SELECT COUNT(*) FROM rate WHERE mentor.id = rate.mentor_id)'),
                        'rate_count'
                    ]
                ],
                include: [
                    {
                        model: models.Review,
                        attributes: [
                            'id',
                            'review_text',
                            'user_id',
                            'mentor_id',
                            'created_at'
                        ],
                        include: {
                            model: models.User,
                            attributes: ['username']
                        }
                    }
                ]
            });
        });
    }
};

Mentor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        language_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'language',
                key: 'id'
            }
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mentor'
    }
);

module.exports = Mentor;