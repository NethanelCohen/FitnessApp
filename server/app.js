const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
