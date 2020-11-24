// const router = require('express').Router();
// const sequelize = require('../../config/connection');
// const { Language, Mentor, User, Review } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get('/', (req, res) => {
//     console.log('======================');
//     Language.findAll({
//         attributes: [
//             'id',
//             'language'
//         ],
//     })
//     .then(dbLangData => res.json(dbLangData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/:id', withAuth, (req, res) => {
//     Language.findByPk(req.params.id, {
//         attributes: [
//             'id',
//             'language'
//         ],
//         include: [
//             {
//                 model: Mentor,
//                 attributes: ['id', 'first_name', 'last_name', 'email'],
//                 include: {
//                     model: Review,
//                     attributes: ['review_text'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 }
//             }
//         ]
//     })
//     .then(dbLangData => {
//         console.log(dbLangData);
//         if (dbLangData) {res.json(dbLangData);
//         }
//         else {
//             res.status(404).json({ message: 'No language found with this id'})
//             return;
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// module.exports = router;