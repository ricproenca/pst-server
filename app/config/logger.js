// app/config/app.js
'use strict';

import dotenv from 'dotenv';
dotenv.config();

const configuration = {
  development: {
    morgan: 'custom'
  },
  production: {
    morgan: 'common'
  },
  test: {
    morgan: 'custom'
  }
};

module.exports = configuration[process.env.NODE_ENV];
