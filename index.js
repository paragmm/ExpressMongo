// Import mongoose library
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));


// Schema Definition
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String
});

// Model Creation
const User = mongoose.model('User', userSchema);

// Save document to MongoDB
async function createUser() {
    const user = new User({
        name: 'Parag Dhali',
        age: 30,
        isMarried: false,
        salary: 50000,
        gender: 'Male'
    });

    // Save document to MongoDB
    await user.save();
    console.log('User Created:', user);
}

// Call the function to insert data
createUser();