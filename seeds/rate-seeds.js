const { Rate } = require('../models');

const rateData = [
    {
        user_id: 1,
        mentor_id: 6
    },
    {
        user_id: 2,
        mentor_id: 5
    },
    {
        user_id: 3,
        mentor_id: 4
    },
    {
        user_id: 4,
        mentor_id: 3
    },
    {
        user_id: 5,
        mentor_id: 2
    },
    {
        user_id: 6,
        mentor_id: 1
    },
];

const seedRates = () => Rate.bulkCreate(rateData);

module.exports = seedRates;