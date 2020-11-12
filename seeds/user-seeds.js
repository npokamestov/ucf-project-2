const { User } = require('../models');

const userData = [
    {
        username: 'testUser1',
        password: 'password123',
        first_name: 'Tyrese',
        last_name: 'Allen'
    },
    {
        username: 'testUser2',
        password: 'password123',
        first_name: 'Tommy',
        last_name: 'Barker'
    },
    {
        username: 'testUser3',
        password: 'password123',
        first_name: 'Stevie',
        last_name: 'Aldred'
    },
    {
        username: 'testUser4',
        password: 'password123',
        first_name: 'Jeevan',
        last_name: 'Camacho'
    },
    {
        username: 'testUser5',
        password: 'password123',
        first_name: 'Tamika',
        last_name: 'Klein'
    },
    {
        username: 'testUser6',
        password: 'password123',
        first_name: 'Eren',
        last_name: 'Bate'
    },
    {
        username: 'testUser7',
        password: 'password123',
        first_name: 'Jody',
        last_name: 'Huynh'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;