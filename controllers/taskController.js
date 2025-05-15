const Task = require('../models/Task');

// Get all tasks for a logged-in user
const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
};

// Create a new task
const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user });
  res.status(201).json(task);
};

// Update an existing task
const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    req.body,
    { new: true }
  );
  res.json(task);
};

// Delete a task
const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user });
  res.json({ message: 'Task deleted' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
