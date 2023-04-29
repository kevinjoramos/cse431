const express = require('express')
const router = require("./routes/contacts")
const { openMongoConnection, closeMongoConnection } = require("./db/connection")

const app = express()
const port = 8080

openMongoConnection()
app.use('/', router)

app.listen(port, () => {
    console.log(`Server running on port ${port}/`)
})

process.on("exit", closeMongoConnection)

