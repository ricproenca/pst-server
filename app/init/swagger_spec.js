// app/init/swagger_spec.js
'use strict';

import swaggerJSDoc from 'swagger-jsdoc';

import swaggerConfig from '../config/swagger.json';

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerConfig);

module.exports = app => {
  // swagger.json route
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};
