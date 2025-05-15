const mongoose = require('mongoose');

// Define the schema for the Task model
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },   // Title of the task (required)
  completed: { type: Boolean, default: false }, // Status of the task (default is false)
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }  // Link to the User who created the task
}, { timestamps: true });

// Define the Task model
module.exports = mongoose.model('Task', taskSchema);
