const express = require('express');
const bodyParser = require('body-parser');
const _connect = require('./db/_connect');

require('dotenv').config();

//Mongodb connection

_connect();

const app = express();



app.use(bodyParser.json());

//Routes

app.get('/', (req,res) => {
	res.send({ message: "Hello World!!!"})
});

app.listen(process.env.PORT, () => console.log(`App listening on ${process.env.PORT}`))