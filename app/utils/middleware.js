// app/utils/middleware.js
'use strict';

import chalk from 'chalk';

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

module.exports = {
  formatMorgan: formatMorganString
};
