import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onEdit, onDelete, onToggleComplete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>Chưa có todo nào. Hãy thêm todo mới!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div 
          key={todo._id} 
          className="todo-item-wrapper" 
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <TodoItem
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;

