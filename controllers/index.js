const router = require('express').Router();

const apiRoutes = require('./api/');
const blogRoutes = require('./blog-routes.js');
const blogDashboardRoutes = require('./blog-dashboard-routes.js');

router.use('/', blogRoutes);
router.use('/blog-dashboard', blogDashboardRoutes);
router.use('/api/', apiRoutes);

module.exports = router;