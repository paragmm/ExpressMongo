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
// Query: Get Married Users
// -----------------------------
async function getMarriedUsers() {
  try {

    const marriedUsers = await User.find({ isMarried: true, gender: 'Male' })
      .or([{ age: { $gt: 25 } }, { salary: { $gte: 50000 } }])
      .select("name age salary -_id")
      .sort({ age: -1 })
      .skip(20)   // This is your OFFSET
      .limit(10);

      /*
      SELECT name, age, salary 
      FROM users 
      WHERE is_married = true 
        AND gender = 'Male' 
        AND (age > 25 OR salary >= 50000);
        ORDER BY age DESC
        LIMIT 10 OFFSET 20;
      */

    console.log('Married Users:', marriedUsers);
  } catch (error) {
    console.error('Error fetching married users:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Call the query function
getMarriedUsers();
