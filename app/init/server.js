// app/init/server.js
'use strict';

/*eslint no-unused-vars: "off"*/

import path from 'path';
import express from 'express';

import lib from '../lib';
import middleware from '../api/middleware';
import routes from '../api/routes';

// get express application object
const app = lib.appExpress;

// Setup View engine
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// Serve Static files
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Setup Routes
app.use(routes);

// 404 Error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res) => {
    res.status(err.code || 500).json({
      status: 'error',
      message: err
    });
  });
}

// Production error handler - no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message
  });
});

module.exports = app;
