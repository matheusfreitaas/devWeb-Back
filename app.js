const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');
const cache = require('memory-cache');

const administrator = require('./administrator/administrator');
const discipline = require('./course/course');
const professor = require('./professor/professor');
const student = require('./student/student');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/* 
  Utilizar coisas definidas nesse exemplo(no swagger): 
  https://medium.com/@tkssharma/swagger-with-existing-node-app-for-api-definition-9e0bd9fdd2af
*/ 

app.use('/administrator', administrator);
app.use('/course', course);
app.use('/professor', professor);
app.use('/student', student);
app.use(express.static('public'));

app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'DevWeb app.',
    version: '1.0.0',
    description: 'This is a api for course and professor avaliation',
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./**/routes/*.js','routes.js'],// pass all in array 
  };

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = app;

/* server swagger
app.get('/swagger.json', function(req, res) {
     res.setHeader('Content-Type', 'application/json');   res.send(swaggerSpec); 
    });
*/

// faz o parse de requisições com o corpo do tipo application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// faz o parse de requisições com o corpo do tipo application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();  // sem o next, a chamada para aqui
});

app.post('/', function (req, res) {
  // aqui estamos devolvendo ao cliente o corpo da requisição POST realizada pelo mesmo.
  res.end(JSON.stringify(req.body, null, 2))
}); 
