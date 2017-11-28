// app/init/server.js
'use strict';

import express from 'express';
import path from 'path';

import middleware from '../middleware';
import routes from '../api/v1/routes';

// Create the Express application object
const app = express();

// Setup Middleware
app.use(middleware.helmet);
app.use(middleware.morgan);
app.use(middleware.jsonBodyParser);
app.use(middleware.urlEncodedBodyParser);
app.use(middleware.expressValidator);
app.use(middleware.compression);

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
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.code || 500).json({
      status: 'error',
      message: err
    });
  });
}

// Production error handler - no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message
  });
});

module.exports = app;
