const express = require('express');
const router = express.Router();

// Test Auth Route
router.get('/', (req, res) => {
  res.json({ message: "Auth route working ✅" });
});

module.exports = router;
