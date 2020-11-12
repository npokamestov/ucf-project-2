const User = require('./User');
const Mentor = require('./Mentor');
const Language = require('./Language');
const Review = require('./Review');
const Rate = require('./Rate');

User.hasMany(Review, {
    foreignKey: 'user_id'
});

User.hasMany(Rate, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Rate.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Mentor.hasMany(Review, {
    foreignKey: 'mentor_id'
});

Mentor.hasMany(Rate, {
    foreignKey: 'mentor_id'
});

Language.hasMany(Mentor, {
    foreignKey: 'language_id'
});

Mentor.belongsTo(Language, {
    foreignKey: 'language_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Mentor, {
    through: Rate,
    as: 'rated_mentor',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Mentor.belongsToMany(User, {
    through: Rate,
    as: 'rated_mentor',
    foreignKey: 'mentor_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Mentor, Language, Review, Rate };