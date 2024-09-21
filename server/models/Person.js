// models/Person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: {
    type: String, // SVG string for the avatar
    required: true,
  },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
