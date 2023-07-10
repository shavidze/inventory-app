const express = require('express');

// const queris = require('./states.queries');

const router = express.Router();

router.get('/states', (req, res) => {
  res.json([]);
});

module.exports = router;
