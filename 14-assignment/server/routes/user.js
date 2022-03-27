const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userControllers');

router.post('/login', controllers.login);
router.post('/signup', controllers.signup);

module.exports = router;