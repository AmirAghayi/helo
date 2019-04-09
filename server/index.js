const massive = require('massive');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const controller = require('./controller');



const app = express();
app.use(bodyParser.json())



let{
    DB_CONNECTION_STRING,
    PORT
} = process.env;


massive(DB_CONNECTION_STRING, {scripts: __dirname + '/db'})
.then((dbInstance) => {
    app.set('db', dbInstance)
}).catch(err => {
    console.log(err)
})










app.listen(PORT, () => {
    console.log(`App is listenning on port ${PORT}`)
})



