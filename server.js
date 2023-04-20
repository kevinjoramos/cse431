const express = require('express')
const router = require("./routes");
const app = express()
const port = 8080


app.use('/', router)

app.listen(port, () => {
    console.log(`Server running on port ${port}/`)
})