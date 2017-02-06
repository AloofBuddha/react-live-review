// Super basic HTTP server

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3001;

const publicPath = path.join(__dirname, '../public');
const indexPath = path.join(__dirname, '../browser/index.html');

// logging
app.use(morgan('dev'));

// serves up files from /public off of root /
app.use(express.static(publicPath));

// api layer could be added here

// for all other request, serve up our single HTML file

app.get('/*', (req, res, next) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
