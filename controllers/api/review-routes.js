const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Review.findAll()
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // expects => {comment_text: "This is the review", user_id: 1, mentor_id: 2}
    Review.create({
        review_text: req.body.review_text,
        user_id: req.session.user_id,
        mentor_id: req.body.mentor_id
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;