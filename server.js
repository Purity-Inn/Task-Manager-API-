const express = require('express');
const dotenv = require('dotenv'); // ✅ Only declare this once
const cors = require('cors');
const connectDB = require('./config/db');

// Load .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
// Allow requests from your React frontend on port 3000
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

