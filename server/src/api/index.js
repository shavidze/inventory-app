const express = require('express');
const states = require('./states/states.routes');

const router = express.Router();

router.use('/states', states);

module.exports = router;
