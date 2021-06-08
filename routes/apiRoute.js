//dependencies
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
let notes = require('../db/db.json');

module.exports = (app) => {
//Displays all saved notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

//Adds new notes 
    app.post('/api/notes', (req, res) => {
 
        let new_note = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid()
        }
        
        console.log(new_note);
        notes.push(new_note);
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err, data) => {
      
            if (err) throw err;
            return res.json(notes);

        });

    });

    app.delete('/api/notes/:id', (req, res) => {
        
    })

}

