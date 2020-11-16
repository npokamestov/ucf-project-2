const { User } = require('../models');

const userdata = [
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
    {
        username: 'testUser8',
        password: 'password123',
        first_name: 'Corrina',
        last_name: 'Chamberlain'
    },
    {
        username: 'testUser9',
        password: 'password123',
        first_name: 'Stewart',
        last_name: 'Blair'
    },
    {
        username: 'testUser10',
        password: 'password123',
        first_name: 'Donald',
        last_name: 'Nielsen'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;