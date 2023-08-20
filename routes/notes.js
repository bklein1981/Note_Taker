//required modules
const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//Get route for retreiving notes
notes.get('/', (req, res) => {
    console.log(`route is working`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(JSON.parse(data));
        }
    })
});

//Post route for displaying notes
notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = { title, text, id:uuidv4() };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const noteData = JSON.parse(data);
                noteData.push(newNote);
                fs.writeFile('./db/db.json', JSON.stringify(noteData), function (err) {
                    console.log('file was saved');
                    res.status(201).json(noteData);
                }
                );
            }
        });
        
    } else {
        res.status(500).json('Error in posting note');
    }
});

notes.delete('/:id', (req, res) => {
    const { id } = req.params;
    let newArray = [];
    if (id) {
        const delNote = {id};
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
        noteArray = JSON.parse(data);
        for (i=0; i<noteArray.length; i++) {
            if (noteArray[i].id === delNote.id) {
                console.log(delNote.id);
                newArray = noteArray.splice(i, 1);
                fs.writeFile('./db/db.json', JSON.stringify(noteArray), function (err) {
                    console.log('Note deleted')
                    res.status(201).json(noteArray);
                });
            }
    }
        });

    }else {
        res.status(500).json('Error in deleting note');
    }
    

});

module.exports = notes;