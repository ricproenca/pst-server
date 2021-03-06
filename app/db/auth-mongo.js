// app/db/mongoDB.js
'use strict';

import mongoose from 'mongoose';
import chalk from 'chalk';

import config from '../config/db';

const url = config.authDbUrl;
const options = { useMongoClient: true };

/**
 * The Mongoose library now has the default Promise implementation deprecated,
 * so we need to plugin custom implementation.
 */
mongoose.Promise = global.Promise;

/**
 * Establish a connection to the mongodb database.
 */
const mongoDbConnection = mongoose.createConnection(url, options);

/**
 * Get notified if a connection error occurs:
 */
mongoDbConnection.on('error', (err) =>{
  console.log(
    chalk.red.bold('\nUSERS-DB ' + err.message + '\n')
  );
});

/**
 * Get notified if we connect successfully
 */
mongoDbConnection.once('open', () => {
  console.log(
    chalk.magenta.bold('USERS-DB connected at ' + url)
  );
});

module.exports = mongoDbConnection;
