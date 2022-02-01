const express = require('express');
const controllers = require("../controllers/chatController");
const router = express.Router();

router.post('/',controllers.create);
router.get('/',controllers.read);
router.patch('/',controllers.update);
router.delete('/',controllers.delete);

module.exports = router;