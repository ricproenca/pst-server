import express from 'express';
const router = express.Router();

/**
 * @swagger
 * definitions:
 *   Pup:
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
 * /api/pup:
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
  res.send('respond with a list of users');
});

module.exports = router;
