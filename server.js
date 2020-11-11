const express = require('express');

// app setup
const app = express();

// server
const server = app.listen(4000, function(){
    console.log('listening to requests on port 4000');
});

// static files
app.use(express.static('public'));