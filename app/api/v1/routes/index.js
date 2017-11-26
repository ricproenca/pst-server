import indexRoute from './base';
import usersRoute from './users';
import docsRoute from './docs';

module.exports = () => {
  return app => {
    app.use('/', indexRoute);
    app.use('/users', usersRoute);
    app.use('/swagger.json', docsRoute);
  };
};
