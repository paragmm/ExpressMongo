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

async function updateUserData() {
  try {
    const filter = await User.findById("695ab0320df1600ee496512e");
    if (!filter) {
      console.log('User not found');
      return;
    } else {
      // filter.name = "Updated Name";
      filter.age = 84;
      filter.isMarried = true;
      filter.salary = 85000;
    }
    const updatedUser = await filter.save();
    console.log('User updated successfully:', updatedUser);
  } catch (error) {
    console.error('Error updating user data:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Call the update function
updateUserData();
