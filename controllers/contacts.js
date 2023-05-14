const { mongoClient } = require("../db/connection")
const {ObjectId} = require("mongodb");
const {Contact} = require("../models/Contact")
const {response} = require("express");


const listAllContacts = async (request, response) => {
    try {
        const database = mongoClient.db("cse341")
        const contacts = database.collection("contacts")
        const contactListResults = await contacts.find({}).toArray()
        console.log(contactListResults)

        if (contactListResults.length === 0) {
            console.log("No Documents Found!")
        }
        response.json(contactListResults)
    } catch(e) {
        console.log(e)
        response.sendStatus(400)
    }
}

const listOneContact = async (request, response) => {
    try {
        const database = mongoClient.db("cse341")
        const contacts = database.collection("contacts")

        const query = { _id: new ObjectId(request.params['id'])}

        const contactResult = await contacts.findOne(query)
        console.log(contactResult)

        response.json(contactResult)
    } catch(e) {
        console.log(e)
        response.sendStatus(400)
    }
}

const createNewContact = async (request, response) => {
    try {
        const database = mongoClient.db("cse341")
        const contacts = database.collection("contacts")
        const newContact = new Contact(
            new ObjectId(request.body._id),
            request.body.firstName,
            request.body.lastName,
            request.body.email,
            request.body.favoriteColor,
            request.body.birthday,
        )

        contacts.insertOne(newContact)
        console.log(newContact)

        response.statusCode = 201
        response.json({"_id": newContact._id})

    } catch(e) {
        console.log(e)
        response.sendStatus(400)
    }
}

const updateContact = async (request, response) => {
    try {
        const database = mongoClient.db("cse341")
        const contacts = database.collection("contacts")
        const contactId = new ObjectId(request.params["id"])

        contacts.replaceOne(
            { _id: contactId },
            {
                _id: new ObjectId(request.body._id),
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                email: request.body.email,
                favoriteColor: request.body.favoriteColor,
                birthday: request.body.birthday
            }
        )
        console.log(request.body)

        response.sendStatus(204)
    } catch (e) {
        console.log(e)
        response.sendStatus(400)
    }
}

const deleteContact = async (request, response) => {
    try {
        const database = mongoClient.db("cse341")
        const contacts = database.collection("contacts")
        const contactId = new ObjectId(request.params["id"])

        contacts.deleteOne( { _id: contactId } )
        console.log(`requested delete for: ${contactId}`)

        response.sendStatus(200)
    } catch (e) {
        console.log(e)
        response.sendStatus(400)
    }
}



module.exports = { listAllContacts, listOneContact, createNewContact, updateContact, deleteContact }
