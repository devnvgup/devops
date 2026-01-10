const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Routes
app.use('/api/todos', require('./routes/todos'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Todo List API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

