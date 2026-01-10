import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onEdit, onDelete, onToggleComplete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo._id, todo.completed)}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3 className="todo-title">{todo.title}</h3>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
        </div>
      </div>
      <div className="todo-actions">
        <button
          onClick={() => onEdit(todo)}
          className="btn-action btn-edit"
          title="Sửa"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.333 2.00001C11.5084 1.82445 11.7163 1.68506 11.9447 1.59123C12.1731 1.4974 12.4173 1.45117 12.6637 1.45534C12.91 1.45951 13.1527 1.51398 13.3777 1.61518C13.6027 1.71638 13.8055 1.86212 13.974 2.04401C14.1425 2.2259 14.2732 2.44015 14.3584 2.67351C14.4436 2.90687 14.4814 3.15449 14.4694 3.40168C14.4574 3.64887 14.3958 3.89049 14.2884 4.11168C14.181 4.33287 14.0302 4.5289 13.8453 4.68734L13.333 5.20001L10.8 2.66668L11.333 2.00001ZM9.86667 3.46668L2.66667 10.6667V13.3333H5.33333L12.5333 6.13334L9.86667 3.46668Z" fill="currentColor"/>
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="btn-action btn-delete"
          title="Xóa"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5C5.77614 5.5 6 5.72386 6 6V12C6 12.2761 5.77614 12.5 5.5 12.5C5.22386 12.5 5 12.2761 5 12V6C5 5.72386 5.22386 5.5 5.5 5.5Z" fill="currentColor"/>
            <path d="M8 5.5C8.27614 5.5 8.5 5.72386 8.5 6V12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12V6C7.5 5.72386 7.72386 5.5 8 5.5Z" fill="currentColor"/>
            <path d="M11 6C11 5.72386 10.7761 5.5 10.5 5.5C10.2239 5.5 10 5.72386 10 6V12C10 12.2761 10.2239 12.5 10.5 12.5C10.7761 12.5 11 12.2761 11 12V6Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 2C11.0523 2 11.5 2.44772 11.5 3V3.5H13.5C13.7761 3.5 14 3.72386 14 4C14 4.27614 13.7761 4.5 13.5 4.5H13V13C13 13.8284 12.3284 14.5 11.5 14.5H4.5C3.67157 14.5 3 13.8284 3 13V4.5H2.5C2.22386 4.5 2 4.27614 2 4C2 3.72386 2.22386 3.5 2.5 3.5H4.5V3C4.5 2.44772 4.94772 2 5.5 2H10.5ZM4.5 4.5V13H11.5V4.5H4.5ZM10.5 3.5H5.5V3H10.5V3.5Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

