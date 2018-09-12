const express = require('express')
const app = express()

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/', function (req, res) {
    res.send('Hello World!')
})