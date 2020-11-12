const { Mentor } = require('../models');

const mentordata = [
    {
        first_name: 'Willa',
        last_name: 'Reynolds',
        email: 'uncled@live.com',
    },
    {
        first_name: 'Kayan',
        last_name: 'Ewing',
        email: 'sethbrown@gmail.com',
    },
    {
        first_name: 'Brody',
        last_name: 'Frey',
        email: 'alhajj@sbcglobal.net',
    },
    {
        first_name: 'Ashleigh',
        last_name: 'Nash',
        email: 'openldap@hotmail.com',
    },
    {
        first_name: 'Montana',
        last_name: 'Cash',
        email: 'facet@msn.com',
    },
    {
        first_name: 'Teegan',
        last_name: 'Mcmahon',
        email: 'steve@comcast.net',
    },

];

const seedMentors = () => Mentor.bulkCreate(mentordata);

module.exports = seedMentors;