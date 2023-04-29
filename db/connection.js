require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_CONNECTION_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function openMongoConnection() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await mongoClient.connect();
        // Send a ping to confirm a successful connection
        await mongoClient.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(e) {
        console.log(e)
    }
}

async function closeMongoConnection() {
    await mongoClient.close()
    console.log("Mongodb connection is closed.")
}

module.exports = { mongoClient, openMongoConnection, closeMongoConnection }

