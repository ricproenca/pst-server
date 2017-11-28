// app/middleware/index.js
'use strict';

import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import helmet from 'helmet';

import appConfig from '../config/app';
import utils from '../utils/middleware';

const morganFormatter =
  appConfig[process.env.NODE_ENV].morgan === 'custom'
    ? utils.formatMorgan
    : appConfig[process.env.NODE_ENV].morgan;

module.exports = {
  // Add various HTTP headers to improve app security
  helmet: helmet(),

  // HTTP request morgan middleware
  morgan: morgan(morganFormatter),

  // Body parsing middleware.
  jsonBodyParser: bodyParser.json(),
  urlEncodedBodyParser: bodyParser.urlencoded({ extended: false }),

  // Express middleware request data validator
  expressValidator: expressValidator(),

  // Routes compression middleware
  compression: compression()
};
