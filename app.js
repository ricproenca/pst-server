import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';

import index from './routes/index';
import users from './routes/users';

import compression from 'compression';
import helmet from 'helmet';

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

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res) => {
  // Locally set locals and provide the error
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
