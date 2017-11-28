// app/api/v1/routes/index.js
'use strict';

import express from 'express';

import indexRoute from './base';
import usersRoute from './users';
import docsRoute from './docs';

const router = express.Router();

// Setup base routes
router.use('/', indexRoute);
router.use('/swagger.json', docsRoute);

// Setup API routes
router.use('/api/v1/users', usersRoute);

module.exports = router;
