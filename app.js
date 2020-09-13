let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');


let app = express();

app.listen(8080);

app.use(bodyParser.json());

app.get('/teachers', (req, res) => {
    res.send('thank you');
});

app.post('/students', (req, res) => {
    req.body.msg="Thank you";!
    res.send(req.body);
});