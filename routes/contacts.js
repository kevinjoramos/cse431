const express = require("express");
const index = express.Router()
const {
    listAllContacts, listOneContact, createNewContact, updateContact, deleteContact
} = require('../controllers/contacts')
const bodyParser = require('body-parser');

index.use(bodyParser.json())

index.get('/contacts', listAllContacts)

index.get('/contacts/:id', listOneContact)

index.post('/contacts', createNewContact)

index.put('/contacts/:id', updateContact)

index.delete('/contacts/:id', deleteContact)

module.exports = index