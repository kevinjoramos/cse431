const express = require("express");
const {giveWifeFullName} = require("../controllers");
const index = express.Router()

index.get('/', giveWifeFullName)

module.exports = index