import appConfig from './app';

module.exports = {
  swaggerDefinition: {
    info: {
      title: appConfig.title,
      version: appConfig.version,
      description: appConfig.description
    },
    host: 'localhost:4000',
    basePath: '/api/v1/'
  },
  apis: ['./app/api/v1/routes/*.js']
};
