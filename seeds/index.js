const seedUsers = require('./user-seeds');
const seedMentors = require('./mentor-seeds');
const seedReviews = require('./review-seeds');
const seedRates = require('./rate-seeds');
const seedLanguages = require('./language-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedLanguages();
    console.log('--------------');

    await seedUsers();
    console.log('--------------');

    await seedMentors();
    console.log('--------------');

    await seedReviews();
    console.log('--------------');

    await seedRates();
    console.log('--------------');

    await seedPosts();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    process.exit(0);
};

seedAll();