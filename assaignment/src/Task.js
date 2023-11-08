
import React from 'react';
import './App.css';
const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`card mb-3 ${task.completed ? 'bg-success text-white' : ''}`}>
      <div className="card-body">
        <h3 className="card-title">{task.title}</h3>
        <p className="card-text">{task.description}</p>
        <p className="card-text">Due Date: {task.dueDate}</p>
        <p className="card-text">Priority: {task.priority}</p>
        <button className="btn btn-secondary mr-2" onClick={() => onToggle(task.id)}>
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(task.id)}>Delete Task</button>
      </div>
    </div>
  );
}

export default Task;
