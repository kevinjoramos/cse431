const express = require('express')
const app = express()
const port = 8080
const router = require("routes/router")

app.use('/', router)

app.listen(port, () => {
    console.log(`Server running on port ${port}/`)
})