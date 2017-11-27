// app/api/v1/routes/index.js
'use strict';

import indexRoute from './base';
import usersRoute from './users';
import docsRoute from './docs';

module.exports = () => {
  return app => {
    app.use('/', indexRoute);
    app.use('/api/v1/users', usersRoute);
    app.use('/swagger.json', docsRoute);
  };
};
