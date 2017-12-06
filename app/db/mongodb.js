// app/db/mongoDB.js
'use strict';

import mongoose from 'mongoose';
import chalk from 'chalk';

import config from '../config/index';

const url = config[process.env.NODE_ENV].usersDbUrl;
const options = { useMongoClient: true };

mongoose.Promise = global.Promise;
const db = mongoose.createConnection(url, options);

db.on('error', (err) =>{
  console.log(
    chalk.red.bold('\nUSERS-DB ' + err.message + '\n')
  );
});

db.once('open', () => {
  console.log(
    chalk.green.bold('USERS-DB connected at ' + url)
  );
});
