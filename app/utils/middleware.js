// app/utils/middleware.js
'use strict';

import chalk from 'chalk';

const SEPARATOR = ' ';
const TOKEN_METHOD_SEPARATOR = '  ';
const PAD_RIGHT_LEN = 56;
const PAD_LEFT_LEN = 10;
const TOKEN_METHODS_COLORS = {
  GET: 'cyan',
  POST: 'blue',
  PUT: 'orange',
  DELETE: 'red'
};

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
  const status = tokens.status(req, res);
  const method = tokens.method(req, res);
  const statusColor =
    status >= 500
      ? 'red'
      : status >= 400 ? 'yellow' : status >= 300 ? 'cyan' : 'green';

  return (
    chalk.reset(
      padRight(
        chalk[TOKEN_METHODS_COLORS[method]](method) +
          TOKEN_METHOD_SEPARATOR +
          tokens.url(req, res),
        PAD_RIGHT_LEN
      )
    ) +
    SEPARATOR +
    chalk[statusColor](status) +
    SEPARATOR +
    chalk.reset(
      padLeft(tokens['response-time'](req, res) + ' ms', PAD_LEFT_LEN)
    )
  );
};

module.exports = {
  formatMorgan: formatMorganString
};
