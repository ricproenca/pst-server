// app/api/controllers/root.js
'use strict';

import yaml from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import config from '../../config/api';

const swaggerDocument = yaml.load('./app/api/docs/rest-interface.yaml');

const rootController = {
  renderView: res => {
    res.render('index', {
      title: config.title,
      project: config.project,
      description: config.description,
      version: config.version
    });
  },
  setupDoc: swaggerUi.setup(swaggerDocument),
  serveDoc: swaggerUi.serve
};

module.exports = rootController;
