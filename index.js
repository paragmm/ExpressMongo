// Import mongoose library
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test') // database name as test
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

// Model Creation (Table as users)
const User = mongoose.model('User', userSchema);

// Save document to MongoDB
async function createUser() {

    // Single User Creation
    const user1 = new User({
        name: 'Probodh Dhali',
        age: 50,
        isMarried: true,
        salary: 50000,
        gender: 'Male'
    });
    await user1.save();
    console.log('Single user Created:', user1);


    // Multiple Users Creation
    const users = [
        {
            name: 'Parag Dhali',
            age: 30,
            isMarried: true,
            salary: 50000,
            gender: 'Male'
        },
        {
            name: 'Charli Dhali Biswas',
            age: 28,
            isMarried: true,
            salary: 45000,
            gender: 'Female'
        },
        {
            name: 'Priyanshu Dhali',
            age: 3,
            isMarried: false,
            salary: 0,
            gender: 'Male'
        }
    ];

    const result = await User.insertMany(users);
    console.log('Users Created:', result);
}

createUser();