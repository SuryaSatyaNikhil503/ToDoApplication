
import React from 'react';

const TaskForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = {
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: formData.get('dueDate'),
      priority: formData.get('priority')
    };
    onSubmit(newTask);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" className="form-control" id="title" name="title" required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea className="form-control" id="description" name="description" required />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" className="form-control" id="dueDate" name="dueDate" required />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority:</label>
        <select className="form-control" id="priority" name="priority" required>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
