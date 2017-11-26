// app/api/v1/routes/docs.js
'use strict';

import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';

import swaggerConfig from '../../../config/swagger';

const router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerConfig);

router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

module.exports = router;
