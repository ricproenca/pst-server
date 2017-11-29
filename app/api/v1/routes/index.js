// app/api/v1/routes/index.js
'use strict';

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

import indexRoute from './base';
import userRoute from './user';

const router = express.Router();
const swaggerDocumentV1 = yaml.load('./app/api/v1/docs/rest-interface.yaml');

// Setup base routes
router.use('/', indexRoute);
router.use('/docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocumentV1));

// Setup API routes
router.use('/api/v1/users', userRoute);

module.exports = router;
