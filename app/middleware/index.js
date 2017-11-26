import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import helmet from 'helmet';
import chalk from 'chalk';

import appConfig from '../config/app';

const padLeft = (str, len) => {
  return len > str.length
    ? new Array(len - str.length + 1).join(' ') + str
    : str;
};

const padRight = (str, len) => {
  return len > str.length
    ? str + new Array(len - str.length + 1).join(' ')
    : str;
};

const formatMorganString = (tokens, req, res) => {
  var status = tokens.status(req, res);
  var statusColor = status >= 500
    ? 'red'
    : status >= 400 ? 'yellow' : status >= 300 ? 'cyan' : 'green';

  return (
    chalk.reset(
      padRight(tokens.method(req, res) + ' ' + tokens.url(req, res), 42)
    ) +
    ' ' +
    chalk[statusColor](status) +
    ' ' +
    chalk.reset(padLeft(tokens['response-time'](req, res) + ' ms', 8))
  );
};

module.exports = () => {
  return app => {
    // Add various HTTP headers to improve app security
    app.use(helmet());

    // HTTP request morgan middleware
    let morganFormatter = appConfig[process.env.NODE_ENV].morgan === 'custom'
      ? formatMorganString
      : appConfig[process.env.NODE_ENV].morgan;

    app.use(morgan(morganFormatter));

    // Body parsing middleware.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Express middleware request data validator
    app.use(expressValidator());

    // Routes compression middleware
    app.use(compression());
  };
};
