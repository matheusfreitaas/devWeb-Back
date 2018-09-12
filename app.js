const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', function (req, res) {
    res.send('Hello World!')
});

/*app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 })
});

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();  // sem o next, a chamada para aqui
});

app.get('/api/endpoint1', (req, res) => {
    res.send(JSON.stringify({value: 1}));
});*/
