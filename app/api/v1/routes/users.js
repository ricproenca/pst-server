// app/api/v1/routes/users.js
'use strict';

import express from 'express';
const router = express.Router();

// Handler: /users/
router
  .route('/')
  .get((req, res, next) => {
    res.send('should get users');
  })
  .post((req, res, next) => {
    res.send('should create user');
  });

// Handler: /users/:user_id
router
  .route('/:userId')
  .get((req, res, next) => {
    res.send('should get user');
  })
  .put((req, res, next) => {
    res.send('should update user');
  })
  .patch((req, res, next) => {
    res.send('should patch user');
  })
  .delete((req, res, next) => {
    res.send('should delete user');
  });

module.exports = router;

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    summary: Get users
 *    description: Returns a list of users
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: An array of users
 *        schema:
 *
 */
