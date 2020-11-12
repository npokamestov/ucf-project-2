const { Language } = require('../models');

const languageData = [
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

const seedLanguages = () => Language.bulkCreate(languageData);

module.exorts = seedLanguages;