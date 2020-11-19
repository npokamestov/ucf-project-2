const { Mentor } = require('../models');

const mentordata = [
    {
        first_name: 'Willa',
        last_name: 'Reynolds',
        email: 'uncled@live.com',
        language_id: 1
    },
    {
        first_name: 'Kayan',
        last_name: 'Ewing',
        email: 'sethbrown@gmail.com',
        language_id: 2
    },
    {
        first_name: 'Brody',
        last_name: 'Frey',
        email: 'alhajj@sbcglobal.net',
        language_id: 3
    },
    {
        first_name: 'Ashleigh',
        last_name: 'Nash',
        email: 'openldap@hotmail.com',
        language_id: 4
    },
    {
        first_name: 'Montana',
        last_name: 'Cash',
        email: 'facet@msn.com',
        language_id: 5
    },
    {
        first_name: 'Teegan',
        last_name: 'Mcmahon',
        email: 'steve@comcast.net',
        language_id: 6
    }
];

const seedMentors = () => Mentor.bulkCreate(mentordata);

module.exports = seedMentors;