import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import helmet from 'helmet';
import swaggerJSDoc from 'swagger-jsdoc';

import config from './config.json';
import index from './routes/index';
import users from './routes/users';

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(config.swagger);

// Create the Express application object
const app = express();

// Add various HTTP headers to improve app security
app.use(helmet());

// Setup View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// HTTP request logger middleware
app.use(logger('dev'));

// Body parsing middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express middleware request data validator
app.use(expressValidator());

// Routes compression middleware
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
app.use('/', index);
app.use('/users', users);

// Swagger json route
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
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
