const express = require("express");
const {giveWifeFullName} = require("../controllers/controllers");
const router = express.Router()

router.get('/', giveWifeFullName)

module.exports = router