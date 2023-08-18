//required modules
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const { clog } = require('./helper/clog.js')

// port for Hiroku
const PORT = process.env.PORT || 3001;

//initiate express
const app = express();

app.use(clog);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//assign public folder
app.use(express.static('public'));

//get route for homepage
app.get('/', (req, res) => 
 res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get ('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '/public/notes.html'));
console.log(`server.js ${req.method} request received`);
}
);

//Reroute to homepage for any non existing pages/routes
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
)

//listen
app.listen(PORT, () => {
    console.log(`Note Taker app listening at http://localhost:${PORT}`);
  });
  