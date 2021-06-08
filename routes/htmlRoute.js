const path = require('path');

module.exports = (app) => {

    //Gets notes page or home page
    app.get('/notes', (req, res) => { res.sendFile(path.join(__dirname, '../public/notes.html')) });
    app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html')) });

}

