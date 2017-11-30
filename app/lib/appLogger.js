// app/lib/logger.js
'use strict';

import morgan from 'morgan';
import config from '../config';
import utils from '../utils/middleware';

const morganFormatter =
  config[process.env.NODE_ENV].morgan === 'custom'
    ? utils.formatMorgan
    : config[process.env.NODE_ENV].morgan;

module.exports = morgan(morganFormatter);
