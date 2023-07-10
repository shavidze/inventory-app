const express = require('express');
const states = require('./states/states.routes');

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    message: '🌭 🍾 H-Invetory API 🥊 🌊',
  });
});

router.get('/states', states);

module.exports = router;
