// app/middleware/index.js
'use strict';

import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import helmet from 'helmet';

import appConfig from '../config/app';
import utils from '../utils/middleware';

module.exports = () => {
  return app => {
    // Add various HTTP headers to improve app security
    app.use(helmet());

    // HTTP request morgan middleware
    let morganFormatter = appConfig[process.env.NODE_ENV].morgan === 'custom'
      ? utils.formatMorgan
      : appConfig[process.env.NODE_ENV].morgan;

    app.use(morgan(morganFormatter));

    // Body parsing middleware.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Express middleware request data validator
    app.use(expressValidator());

    // Routes compression middleware
    app.use(compression());
  };
};
