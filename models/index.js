const User = require('./User');
const Mentor = require('./Mentor');
const Language = require('./Language');
const Review = require('./Review');
const Rate = require('./Rate');

User.hasMany(Mentor, {
    foreignKey: 'user_id'
});

User.hasMany(Review, {
    foreignKey: 'user_id'
});

User.hasMany(Rate, {
    foreignKey: 'user_id'
});

Mentor.hasMany(Language, {
    foreignKey: 'mentor_id'
});

Mentor.hasMany(Review, {
    foreignKey: 'mentor_id'
});

Mentor.hasMany(Rate, {
    foreignKey: 'mentor_id'
});

Language.hasMany(Mentor, {
    foreignKey: 'mentor_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Review.belongsTo(Mentor, {
    foreignKey: 'mentor_id',
    onDelete: 'SET NULL'
});

Rate.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Rate.belongsTo(Mentor, {
    foreignKey: 'mentor_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Mentor, {
    through: Rate,
    as: 'rated_mentors',

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Mentor.belongsToMany(User, {
    through: Rate,
    as: 'rated_mentors',

    foreignKey: 'mentor_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Mentor, Language, Review, Rate };