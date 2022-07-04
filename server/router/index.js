const express = require("express");
const router = express.Router();
const User = require("./user");
const Item = require("./item");
const Pub = require('./pub')
const { authn } = require("../middleware/authn");

router.use("/users", User);
router.use("/pub", Pub)
router.use(authn);
router.use("/items", Item);

module.exports = router;
