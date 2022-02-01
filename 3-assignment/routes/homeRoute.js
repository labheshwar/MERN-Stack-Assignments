const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllerHome');

router.get('/', controllers.welcomeHome);

module.exports = router;