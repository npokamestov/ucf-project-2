const { Language } = require('../models');

const languagedata = [
    {
        language: 'Spanish'
    },
    {
        language: 'French'
    },
    {
        language: 'German'
    },
    {
        language: 'English'
    },
    {
        language: 'Arabic'
    },
    {
        language: 'Mandarin'
    }
];

const seedLanguages = () => Language.bulkCreate(languagedata);

module.exports = seedLanguages;