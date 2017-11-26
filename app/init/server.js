import express from 'express';
import path from 'path';
import middleware from '../middleware';
import routes from '../api/v1/routes';

// Create the Express application object
const app = express();

// Setup middleware
middleware()(app);

// Setup View engine
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// Serve static files
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Setup routes
routes()(app);

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
