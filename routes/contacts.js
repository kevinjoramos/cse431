const express = require("express");
const index = express.Router()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../utils/swagger-output.json');

const {
    listAllContacts, listOneContact, createNewContact, updateContact, deleteContact
} = require('../controllers/contacts')
const bodyParser = require('body-parser');

index.use(bodyParser.json())

index.use('/api-docs', swaggerUi.serve);

index.get('/api-docs', swaggerUi.setup(swaggerDocument));

index.get('/contacts', listAllContacts)

index.get('/contacts/:id', listOneContact)

index.post('/contacts', createNewContact)

index.put('/contacts/:id', updateContact)

index.delete('/contacts/:id', deleteContact)

module.exports = index