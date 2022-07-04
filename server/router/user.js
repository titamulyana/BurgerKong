const express = require("express");
const router = express.Router();
const Controller = require('../controllers/usercontrol')

router.post('/register', Controller.createUser)
router.post('/login', Controller.login)

module.exports = router