const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET /api/users - get all users (protect with auth middleware if needed)
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

module.exports = router;