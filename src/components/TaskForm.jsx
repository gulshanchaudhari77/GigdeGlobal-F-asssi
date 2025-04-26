import { useState } from 'react';
import axios from '../services/api';

const TaskForm = ({ projectId, onTaskCreated }) => {
  const [task, setTask] = useState({ title: '', description: '', status: 'Pending' });

  const createTask = async (e) => {
    e.preventDefault();
    await axios.post(`/tasks`, { ...task, project: projectId });
    setTask({ title: '', description: '', status: 'Pending' });
    onTaskCreated();
  };

  return (
    <form onSubmit={createTask} className="task-form">
      <h1 className='task-heading'>Task Form</h1>
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        className="task-input"
      />

      <input
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        className="task-input"
      />

      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
        className="task-select"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
