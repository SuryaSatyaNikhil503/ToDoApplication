
import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  }

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className="containerr">
      <div className="row">
        <div className="col">
          <TaskForm onSubmit={addTask} />
        </div>
      </div>
      {tasks.map(task =>
        <Task
          key={task.id}
          task={task}
          onToggle={toggleComplete}
          onDelete={deleteTask}
        />
      )}
    </div>
  );
}

export default App;
