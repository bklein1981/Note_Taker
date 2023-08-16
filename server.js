//required modules
const express = require('express');
const path = require('path');

// port for Hiroku
const PORT = process.env.PORT || 3001;

//initiate express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

//assign public folder
app.use(express.static('public'));

//get route for homepage
app.get('/', (req, res) => 
 res.sendFile(path.join(__dirname, 'public/index.html'))
);

//Get route for notes
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//listen
app.listen(PORT, () => {
    console.log(`Note Taker app listening at http://localhost:${PORT}`);
  });
  