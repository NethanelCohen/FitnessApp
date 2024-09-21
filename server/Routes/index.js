// src/routes/index.js
const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// Route to save person details
router.post('/savePerson', async (req, res) => {
  const { name, gender, age, hairstyle, hairColor, eyeColor } = req.body;

  try {
    const newPerson = new Person({
      name,
      gender,
      age,
      hairstyle,
      hairColor,
      eyeColor
    });
    await newPerson.save();
    res.status(200).json({ message: 'Person details saved successfully' });
  } catch (error) {
    console.error('Error saving person details:', error);
    res.status(500).json({ message: 'Error saving person details' });
  }
});

module.exports = router;
