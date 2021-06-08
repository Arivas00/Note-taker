const path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(_dirname, '../public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(_dirname, '../public/notes.html')))

module.exports = app;