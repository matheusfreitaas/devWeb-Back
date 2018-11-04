const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const cache = require('memory-cache');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const admin = require('./administrator/administrator.routes');
const student = require('./student/student.routes');
const professor = require('./professor/professor.routes');
const course = require('./course/course.routes');
const question = require('./question/question.routes');

app.use('/administrator', admin);
app.use('/student', student);
app.use('/professor', professor);
app.use('/course', course);
app.use('/question', question);

app.use(morgan(function (tokens, req, res) {
   return [
     tokens.method(req, res),
     tokens.url(req, res),
     tokens.status(req, res),
     tokens.res(req, res, 'content-length'), '-',
     tokens['response-time'](req, res), 'ms'
   ].join(' ')
 }));

//DB
let dev_db_url = 'mongodb://admin:admin1234@ds139277.mlab.com:39277/devweb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* 
  Utilizar coisas definidas nesse exemplo(no swagger): 
  https://medium.com/@tkssharma/swagger-with-existing-node-app-for-api-definition-9e0bd9fdd2af
*/ 
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
 
const options = {
swaggerDefinition: swaggerDefinition,
// path to the API docs
apis: ['./**/routes/*.js','routes.js'],// pass all in array 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = app;