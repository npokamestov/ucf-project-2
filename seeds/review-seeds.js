const { Review } = require('../models');

const reviewData = [
    {
        review_text: 'Weary before there store on back eyes above flung wore, pondered for he more i. Meaninglittle tell my metell the.',
        user_id: 1,
        mentor_id: 6
    },
    {
        review_text: 'Is our this my his so bosoms or repeating within the. Lenore enchanted thy living plainly, though he i napping.',
        user_id: 2,
        mentor_id: 5
    },
    {
        review_text: 'Before thee the something had the grim wore bird nevermore. Thrilled muttered napping weary be of and token. That chamber.',
        user_id: 3,
        mentor_id: 4
    },
    {
        review_text: 'And and oer dreary doubtless tis is door evilprophet both lining, here not i here nightly lamplight sad name, unbrokenquit.',
        user_id: 4,
        mentor_id: 3
    },
    {
        review_text: 'This raven from the louder tapping i in. Lies tis the i nothing came floor chamber now within, thy raven.',
        user_id: 5,
        mentor_id: 2
    },
    {
        review_text: 'A the store not upon shrieked the these bust seeing. By ebony of murmured spoke bird sat. The in seraphim.',
        user_id: 6,
        mentor_id: 1
    },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;