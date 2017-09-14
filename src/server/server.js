const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

// Import Http Routes
const api = require('./routes');
const apiTwo = require("./routes-two");

const app = express();

// set up CORS - Cross Origin Requests
app.use(cors());

// Set Up Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);
app.use('/apiTwo', apiTwo);


let port = 8080;
app.listen(port, () => {
    console.log( ` Listening on ${port} , this is where the magic happens`);
})
