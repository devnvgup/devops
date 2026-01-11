import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const API_URL = '/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("test")

  // Lấy tất cả todos
  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Thêm todo mới
  const addTodo = async (todoData) => {
    try {
      const response = await axios.post(API_URL, todoData);
      setTodos([response.data, ...todos]);
    } catch (error) {
      console.error('Error adding todo:', error);
      alert('Lỗi khi thêm todo!');
    }
  };

  // Cập nhật todo
  const updateTodo = async (id, todoData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, todoData);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
      setEditingTodo(null);
    } catch (error) {
      console.error('Error updating todo:', error);
      alert('Lỗi khi cập nhật todo!');
    }
  };

  // Xóa todo
  const deleteTodo = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa todo này?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setTodos(todos.filter(todo => todo._id !== id));
      } catch (error) {
        console.error('Error deleting todo:', error);
        alert('Lỗi khi xóa todo!');
      }
    }
  };

  // Toggle completed
  const toggleComplete = async (id, currentStatus) => {
    try {
      const todo = todos.find(t => t._id === id);
      const response = await axios.put(`${API_URL}/${id}`, {
        ...todo,
        completed: !currentStatus
      });
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm 
          onSubmit={editingTodo ? (data) => updateTodo(editingTodo._id, data) : addTodo}
          editingTodo={editingTodo}
          onCancel={() => setEditingTodo(null)}
        />
        {loading ? (
          <div className="loading">Đang tải...</div>
        ) : (
          <TodoList 
            todos={todos}
            onEdit={setEditingTodo}
            onDelete={deleteTodo}
            onToggleComplete={toggleComplete}
          />
        )}
      </div>
    </div>
  );
}

export default App;

