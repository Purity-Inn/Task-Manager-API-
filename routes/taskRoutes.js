const express = require('express');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const auth = require('../middleware/auth');

const router = express.Router();

// GET & POST /api/tasks/
router.route('/')
  .get(auth, getTasks)
  .post(auth, createTask);

// PUT & DELETE /api/tasks/:id
router.route('/:id')
  .put(auth, updateTask)
  .delete(auth, deleteTask);

module.exports = router;
