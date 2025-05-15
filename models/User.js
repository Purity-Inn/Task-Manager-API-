const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name of the user
  email: { 
    type: String, 
    required: true, 
    unique: true,   // Ensures email is unique in the collection
    match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Email format validation
  },
  password: { type: String, required: true }  // Password of the user
}, { timestamps: true });

// This hook runs before saving a user document to hash the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password is modified
  this.password = await bcrypt.hash(this.password, 10);  // Hash password with salt rounds
  next();
});

// Define the User model
module.exports = mongoose.model('User', userSchema);
