// app/api/routes/users.js
'use strict';

import express from 'express';

import userController from '../controllers/user';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

router.get('/:userId', userController.getUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
