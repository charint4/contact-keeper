const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desv    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all cointacts');
});

// @route   POST api/contacts
// @desv    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desv    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

// @route   DELETE api/contacts/:id
// @desv    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
