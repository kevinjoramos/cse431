const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts API',
    },
    host: 'cse341-b0h6.onrender.com',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['../server.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import('../server.js');
});