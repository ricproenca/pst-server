// app/config/app.js
'use strict';

import dotenv from 'dotenv';
dotenv.config();

const commonConfig = {
  title: 'Project School Timetables API',
  project: 'PST-API',
  description: 'an Automatic timetable scheduling for schools.',
  version: '0.1.0'
};

const configuration = {
  development: {
    title: commonConfig.title,
    project: commonConfig.project,
    description: commonConfig.description,
    version: commonConfig.version
  },
  production: {
    title: commonConfig.title,
    project: commonConfig.project,
    description: commonConfig.description,
    version: commonConfig.version
  },
  test: {
    title: commonConfig.title,
    project: commonConfig.project,
    description: commonConfig.description,
    version: commonConfig.version
  }
};

module.exports = configuration[process.env.NODE_ENV];
