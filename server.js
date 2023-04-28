const express = require('express')
const router = require("./routes")
const { run } = require("./db/connection")

const app = express()
const port = 8080

run().catch(console.dir);

app.use('/', router)

app.listen(port, () => {
    console.log(`Server running on port ${port}/`)
})