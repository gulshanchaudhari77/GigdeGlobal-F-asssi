import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const ProjectPage = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(`/tasks/${id}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [id]);

  return (
    <div>
      <h2 className='project-task'>Project Tasks</h2>
      <TaskForm projectId={id} onTaskCreated={fetchTasks} />
      <TaskList tasks={tasks} refresh={fetchTasks} />
    </div>
  );
};
export default ProjectPage;