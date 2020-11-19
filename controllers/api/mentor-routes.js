const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Mentor , User, Review } = require('../../models');
// const withAuth = require('../../utils/auth');

// get all mentors
router.get('/', (req, res) => {
    console.log('======================');
    Mentor.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name',
            'email',
            'language_id'
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'review_text', 'mentor_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            // {
            //     model: User,
            //     attributes: ['username']
            // }
        ]
    })
    .then(dbMentorData => res.json(dbMentorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Mentor.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'first_name',
            'last_name',
            'email',
            'language_id'
        ],
        // include: [
        //     {
        //         model: Review,
        //         attributes: ['id', 'review_text', 'mentor_id', 'user_id', 'created_at'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
            // {
            //     model: User,
            //     attributes: ['username']
            // }
        // ]
    })
    .then(dbMentorData => {
        if (!dbMentorData) {
            res.status(404).json({ message: 'No mentor found with this id' });
            return;
        }
        res.json(dbMentorData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.post('/', withAuth, (req, res) => {
//     // expects {title: 'Taskmaster goes public!', content: 'this is some content', user_id: 1}
//     Mentor.create({
//         title: req.body.title,
//         content: req.body.content,
//         user_id: req.session.user_id
//     })
//     .then(dbMentorData => res.json(dbMentorData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.put('/:id', withAuth, (req, res) => {
//     Mentor.update(req.body, {
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbMentorData => {
//         if (!dbMentorData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }
//         res.json(dbMentorData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//     console.log('id', req.params.id);
//     Mentor.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbMentorData => {
//         if (!dbMentorData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//         }
//         res.json(dbMentorData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;