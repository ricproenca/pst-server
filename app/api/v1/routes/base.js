// app/api/v1/routes/base.js
'use strict';

import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    project: 'Project School Timetables API',
    title: 'PST-API',
    description: 'designed for automatic generation of timetables for schools'
  });
});

module.exports = router;
