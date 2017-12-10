// app/api/routes/base.js
'use strict';

import express from 'express';

import rootController from '../controllers/root';

const router = express.Router();

router.get('/', (req, res) => {
  rootController.renderView(res);
});

router.use('/docs', rootController.serveDoc, rootController.setupDoc);

module.exports = router;
