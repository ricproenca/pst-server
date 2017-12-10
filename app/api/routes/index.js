// app/api/routes/index.js
'use strict';

import express from 'express';

import rootRoute from './root';
import userRoute from './user';

const router = express.Router();

/**
 * Set the route handler for the base url.
 */
router.use('/', rootRoute);

/**
 * Set the route handler for the api url.
 */
router.use('/api/users', userRoute);

module.exports = router;
