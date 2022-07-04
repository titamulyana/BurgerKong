const express = require("express");
const router = express.Router();
const Controller = require('../controllers/pubcontroller');


router.get('/', Controller.getItem)
router.get('/:id', Controller.findItem)

module.exports = router