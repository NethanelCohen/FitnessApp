const mongoose = require('mongoose');

const connectDB = async () => {
  // Log the MongoDB URI to see if it is loaded
  console.log('MongoDB URI:', process.env.MONGO_URI); // This will print the URI to the console

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
