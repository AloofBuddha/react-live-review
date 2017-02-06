// Super basic HTTP server

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3001;

const publicPath     = path.join(__dirname, '../public');
const browserPath    = path.join(__dirname, '../browser');
const dependencyPath = path.join(__dirname, '../node_modules');

// logging
app.use(morgan('dev'));

// serves up files from /public, /browser, /node_modules
app.use(express.static(publicPath));
app.use(express.static(browserPath));
app.use(express.static(dependencyPath));

// serves up main (only) page /browser/index.html
app.get('/', (req, res, next) => {
  res.redirect(browserPath);
});

// api layer could be added here if desired
// app.use('/api', require('./api'));

// for all other URL paths, redirect to /
app.get('/*', (req, res, next) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
