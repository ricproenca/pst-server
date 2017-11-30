// app/middleware/index.js
'use strict';

import appExpress from './appExpress';
import appLogger from './appLogger';

module.exports = {
  appExpress: appExpress,
  appLogger: appLogger
};
