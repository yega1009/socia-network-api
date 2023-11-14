const router = require('express').Router();
const apiRoutes = require('./api');

// Direct all '/api' routes to the apiRoutes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('API route not found!');
});

module.exports = router;
