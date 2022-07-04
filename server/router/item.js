const express = require("express");
const router = express.Router();
const Controller = require('../controllers/itemcontrol');

router.get('/', Controller.getItem)
router.post('/', Controller.addItem)
router.get('/:id', Controller.findItem)
router.put('/:id', Controller.editItem)
router.delete('/:id', Controller.delete)

module.exports = router