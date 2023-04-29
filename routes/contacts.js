const express = require("express");
const index = express.Router()
const { listAllContacts, listOneContact } = require('../controllers/contacts')

index.get('/contacts', listAllContacts)
index.get('/contacts/:id', listOneContact)

module.exports = index