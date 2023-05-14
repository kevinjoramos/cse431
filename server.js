const express = require('express')
const router = require("./routes/contacts")
const { openMongoConnection, closeMongoConnection } = require("./db/connection")

const app = express()
const port = 8080

openMongoConnection()

// Add support for CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});
app.use('/', router)

app.listen(port, () => {
    console.log(`Server running on port ${port}/`)
})

process.on("exit", closeMongoConnection)

