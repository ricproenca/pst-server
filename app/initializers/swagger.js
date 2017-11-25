import swaggerJSDoc from 'swagger-jsdoc';

import swaggerConfig from '../config/swagger.json';

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerConfig);

module.exports = app => {
  // swagger.json route
  app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};
