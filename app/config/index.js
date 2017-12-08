// app/config/app.js
'use strict';

import dotenv from 'dotenv';
dotenv.config();

const commonConfig = {
  info: {
    title: 'Project School Timetables API',
    project: 'PST-API',
    description: 'an Automatic timetable scheduling for schools.',
    version: '0.1.0'
  },
  host: 'localhost:' + process.env.PORT,
  usersDbUrl: process.env.MONGODB_URI
};

const configuration = {
  development: {
    info: commonConfig.info,
    host: commonConfig.host,
    usersDbUrl: commonConfig.usersDbUrl,
    morgan: 'custom'
  },
  production: {
    info: commonConfig.info,
    host: commonConfig.host,
    usersDbUrl: commonConfig.usersDbUrl,
    morgan: 'common'
  },
  test: {}
};

module.exports = configuration[process.env.NODE_ENV];
