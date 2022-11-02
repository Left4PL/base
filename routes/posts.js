const express = require('express');
const postCon = require('../controllers/posts');

const router = express.Router();

router.get('/', postCon.getMainPage);

module.exports = router;