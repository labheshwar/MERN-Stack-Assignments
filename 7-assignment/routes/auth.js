const express = require('express');
const controllers = require("../controllers/user");
const router = express.Router();

router.get('/facebook', controllers.fbAuthenticate); 
router.get('/facebook/callback', controllers.fbCallback);
router.get('/success', controllers.success);
router.get('/failed', controllers.failed);

module.exports = router;