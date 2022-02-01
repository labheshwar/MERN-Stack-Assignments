const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllerMaths');

router.get('/', controllers.welcomeMaths);
router.get('/random', controllers.random);

module.exports = router;