const express = require('express');
const dataController = require('../app/controller/dataController');
const router = express.Router();

router.get('/', dataController.getData);
router.post('/', dataController.postData);

module.exports = router;