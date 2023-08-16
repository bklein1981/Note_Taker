// required modules
const express = require('express');

//import notes module
const notesRouter = require('./notes');

//innitiate express
const app = express();

//use notesRouter
app.use('/notes', notesRouter);

//export for use by server.js
module.exports = app
