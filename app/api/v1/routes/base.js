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

/**
 * @swagger
 * definitions:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /api/puppies:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
