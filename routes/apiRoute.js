const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => { 
        res.json(notes);
    });

}
