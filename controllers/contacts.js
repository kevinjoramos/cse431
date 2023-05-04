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
    }
}

const updateContact = async (request, response) => {
    console.log(request)
}

const deleteContact = async (request, response) => {
    console.log(request)
}



module.exports = { listAllContacts, listOneContact, createNewContact, updateContact, deleteContact }
