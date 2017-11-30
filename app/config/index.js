// app/config/app.js
'use strict';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

const commonConfig = {
  info: {
    title: 'Project School Timetables API',
    version: '0.1.0',
    description: 'Automatic timetable scheduling for schools'
  }
};

const devConfig = {
  info: commonConfig.info,
  host: 'localhost:' + process.env.PORT,
  morgan: 'custom'
};

const prodConfig = {
  info: commonConfig.info,
  host: 'https://pst-server.herokuapp.com/',
  morgan: 'common'
};

module.exports = {
  development: devConfig,
  production: prodConfig
};
