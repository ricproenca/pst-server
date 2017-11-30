// app/middleware/index.js
'use strict';

import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import helmet from 'helmet';

import lib from '../lib';

// get express application object
const app = lib.appExpress;

// get logger
const logger = lib.appLogger;

app.use(helmet());

// HTTP request morgan middleware
app.use(logger);

// Body parsing middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express middleware request data validator
app.use(expressValidator());

// Routes compression middleware
app.use(compression());
