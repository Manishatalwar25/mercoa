// backend/routes/api.js
const express = require('express');
const router = express.Router();

// Example GET route
router.get('/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports = router;
