const http = require('http')

const hostname = '127.0.0.1'
const port_number = 8080

const server = http.createServer((request, response) => {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        response.end('Nathalia Paula Da Silva Espinelly Ramos\n')
})

server.listen(port_number, hostname, () => {
    console.log(`Server running at http://${hostname}:${port_number}/`)
})