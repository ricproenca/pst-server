// app/config/db.js
'use strict';

import dotenv from 'dotenv';
dotenv.config();

const commonConfig = {
  host: 'localhost:' + process.env.PORT,
  authDbUrl: process.env.MONGODB_URI
};

const configuration = {
  development: {
    host: commonConfig.host,
    authDbUrl: commonConfig.authDbUrl
  },
  production: {
    host: commonConfig.host,
    authDbUrl: commonConfig.authDbUrl
  },
  test: {
    host: commonConfig.host,
    authDbUrl: commonConfig.authDbUrl
  }
};

module.exports = configuration[process.env.NODE_ENV];
