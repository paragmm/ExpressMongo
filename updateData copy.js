// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String
});

// User Model
const User = mongoose.model('User', userSchema);

// -----------------------------
// Query: Update Data
// -----------------------------

