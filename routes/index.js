const express = require("express");
const {giveWifeFullName} = require("../controllers");
const index = express.Router()

index.get('/', giveWifeFullName)
index.get('/contacts' )

module.exports = index