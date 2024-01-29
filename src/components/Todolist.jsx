import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem.jsx';
import './todolist.css';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask} id='push'>Add Task</button>
        <ul className='newtask'>
          {tasks.map((task, index) => (
            <li key={index}>
              <TodoItem task={task} onDelete={() => handleDeleteTask(index)} id='tasks'/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
