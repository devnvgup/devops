const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Lấy tất cả todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    console.log(todos)
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Lấy một todo theo ID
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Tạo todo mới
router.post('/', async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const todo = new Todo({
      title,
      description: description || '',
      completed: completed || false
    });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Cập nhật todo
router.put('/:id', async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        completed
      },
      { new: true, runValidators: true }
    );
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Xóa todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

