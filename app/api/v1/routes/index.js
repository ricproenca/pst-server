// app/api/v1/routes/index.js
'use strict';

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

import indexRoute from './base';
import usersRoute from './users';

const router = express.Router();
const swaggerDocument = yaml.load('./app/api/v1/docs/petstore.yaml');

// Setup base routes
router.use('/', indexRoute);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Setup API routes
router.use('/api/v1/users', usersRoute);

module.exports = router;
