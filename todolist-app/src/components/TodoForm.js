import React, { useState, useEffect } from 'react';
import './TodoForm.css';

function TodoForm({ onSubmit, editingTodo, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit({
        title: title.trim(),
        description: description.trim(),
        completed: editingTodo ? editingTodo.completed : false
      });
      if (!editingTodo) {
        setTitle('');
        setDescription('');
      }
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Tiêu đề todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Mô tả (tùy chọn)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          rows="3"
        />
      </div>
      <div className="form-actions">
        {editingTodo && (
          <button type="button" onClick={onCancel} className="btn btn-cancel">
            Hủy
          </button>
        )}
        <button type="submit" className="btn btn-submit">
          {editingTodo ? 'Cập nhật' : 'Thêm Todo'}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;

