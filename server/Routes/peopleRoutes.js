// server/routes/peopleRoutes.js
const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.post('/savePerson', async (req, res) => {
  try {
    const { firstName, lastName, age, gender, avatar } = req.body;

    if (!firstName || !lastName || !age || !gender || !avatar) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newPerson = new Person({
      firstName,
      lastName,
      age,
      gender,
      avatar,
    });

    await newPerson.save();
    res.status(200).json({ message: 'Person saved successfully' });
  } catch (error) {
    console.error('Error saving person:', error);
    res.status(500).json({ error: 'Failed to save person' });
  }
});

module.exports = router;
