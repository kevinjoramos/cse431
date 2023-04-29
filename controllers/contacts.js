const { mongoClient } = require("../db/connection")
const {ObjectId} = require("mongodb");


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

module.exports = { listAllContacts, listOneContact }
