const User = require('./User');
const Mentor = require('./Mentor');
const Language = require('./Language');
const Review = require('./Review');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Review, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Review.belongsTo(Mentor, {
    foreignKey: 'mentor_id',
    onDelete: 'SET NULL'
});

Mentor.hasMany(Review, {
    foreignKey: 'mentor_id'
});

Language.hasMany(Mentor, {
    foreignKey: 'language_id'
});

Mentor.belongsTo(Language, {
    foreignKey: 'language_id',
    onDelete: 'SET NULL'
});

module.exports = { 
    User, 
    Mentor, 
    Language, 
    Review,
    Comment, 
    Post 
};