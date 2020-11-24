const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment, Mentor, Language, Review } = require('../models');
const withAuth = require('../utils/auth');

// get all posts and reviews for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                order: [['created_at', 'DESC']],
                include: {
                model: User,
                attributes: ['username']
                }
            },
        ]
    })
    .then(dbPostData => {
        // res.json(dbPostData)
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/reviews', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Review.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'review_text',
            'mentor_id'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Mentor,
                attributes: ['first_name', 'last_name', 'language_id'],
                include: {
                    model: Language,
                    attributes: ['language']
                }
            }
        ]
    })
    .then(dbReviewData => {
        // res.json(dbReviewData)
        const reviews = dbReviewData.map(review => review.get({ plain: true }));
        res.render('review-dashboard', { reviews, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/post/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'content',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                order: [['created_at', 'DESC']],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            
            res.render('edit-post', {
                post,
                loggedIn: true
            });
        } 
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.get('/edit/review/:id', withAuth, (req, res) => {
    Review.findByPk(req.params.id, {
        attributes: [
            'id',
            'review_text',
            'mentor_id',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Mentor,
                attributes: ['id','first_name', 'last_name', 'language_id'],
                include: {
                    model: Language,
                    attributes: ['language']
                }
            }
        ]
    })
    .then(dbReviewData => {
        if (dbReviewData) {
            // res.json(dbReviewData)
            const review = dbReviewData.get({ plain: true });
            
            res.render('edit-review', {
                review,
                loggedIn: true
            });
        } 
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;