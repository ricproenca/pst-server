var express = require('express');
var router = express.Router();

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

router.get('/', function(req, res) {
  res.render('index', {
    project: 'pst-server-api',
    title: 'Project School Timetables API',
    description: 'for automatic generation of timetables for schools'
  });
});

module.exports = router;
