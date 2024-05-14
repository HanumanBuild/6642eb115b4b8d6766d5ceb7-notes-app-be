const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  const newNote = new Note({ title, content, author });
  try {
    await newNote.save();
    res.status(201).send('Note created');
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.send('Note deleted');
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;