// app/middleware/index.js
'use strict';

import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import helmet from 'helmet';

import app from '../lib/server';
import logger from '../lib/logger';

app.use(helmet());

// HTTP request morgan middleware
app.use(logger);

/**
 * As far as we are going to use the JSON format for communication,
 * this middleware helps to transparently use JSON objects without manually converting them.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express middleware request data validator
app.use(expressValidator());

// Routes compression middleware
app.use(compression());
