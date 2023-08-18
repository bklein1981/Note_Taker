//required modules
const notes = require('express').Router();
const fs = require('fs');

//Get route for retreiving notes
notes.get('/', (req, res) => {
    console.log(`route is working`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else { 
           return res.json(data);
        }
    })
})

//Post route for displaying notes
notes.post('/', (req, res) => {
    
    const { title, text } = req.body;

    if (title && text) {
        const newNote = { title, text };
    

   fs.readFile('./db/db.json', 'utf8', (err, data) => {
       if (err) {
           console.log(err);
       } else { 
            const noteData = JSON.parse(data);
            noteData.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(noteData), function(err) {
                console.log('file was saved');
            }
            );
        }
    });
    res.status(201);
} else {
    res.status(500).json ('Error in posting note');
}
    
});

module.exports = notes;