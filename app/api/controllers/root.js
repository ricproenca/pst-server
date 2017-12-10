// app/api/controllers/root.js
'use strict';

import yaml from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import config from '../../config';

const swaggerDocument = yaml.load('./app/api/docs/rest-interface.yaml');

const rootController = {
  renderView: res => {
    res.render('index', {
      title: config.info.title,
      project: config.info.project,
      description: config.info.description,
      version: config.info.version
    });
  },
  setupDoc: swaggerUi.setup(swaggerDocument),
  serveDoc: swaggerUi.serve
};

module.exports = rootController;
