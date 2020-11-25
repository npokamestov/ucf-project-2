const { Language } = require('../models');

const languagedata = [
    {
        language: 'English'
    },
    {
        language: 'Spanish'
    },
    {
        language: 'French'
    },
    {
        language: 'Swedish'
    },
    {
        language: 'German'
    },
    {
        language: 'Russian'
    }
];

const seedLanguages = () => Language.bulkCreate(languagedata);

module.exports = seedLanguages;