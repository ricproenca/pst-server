// app/api/routes/base.js
'use strict';

import express from 'express';

import baseController from '../controllers/base';

const router = express.Router();

router.get('/', (req, res) => {
  baseController.renderView(res);
});

router.use('/docs', baseController.serveDoc, baseController.setupDoc);

module.exports = router;
