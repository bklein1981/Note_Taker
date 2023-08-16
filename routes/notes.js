//required modules
const notes = require('express').Router();

//Get route for retreiving notes
notes.get('/', (req, res) => {
    res.json(`${req.method} request received`);
    console.info(`${req.method} request received for notes`);
    //readFromFile('../db/db.json')
})

//Post route for displaying notes
notes.post('/', (req, res) => {
    res.json(`${req.method} request received`);
});


module.exports = notes;