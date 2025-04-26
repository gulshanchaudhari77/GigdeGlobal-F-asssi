import { useEffect, useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/projects')
      .then(res => setProjects(res.data))
      .catch(() => navigate('/'));
  }, []);

  const handleAddProject = () => {
    if (newProjectName.trim() === '') return;

    axios.post('/projects', { name: newProjectName })
      .then(res => {
        setProjects([...projects, res.data]);
        setNewProjectName('');
        console.log("hi",res.data)
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="dashboard-container">
      <h2 className="proj-heading">Your Projects</h2>

      <div className="add-project">
        <input
          type="text"
          placeholder="Enter project name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          className="project-input"
        />
        <button onClick={handleAddProject} className="add-btn">Add Project</button>
      </div>

      {projects.length === 0 ? (
        <p className="no-projects">No projects yet. Add your first project!</p>
      ) : (
        <ul className="project-list">
          {projects.map((p, index) => (
            <li key={p._id} onClick={() => navigate(`/projects/${p._id}`)} className="project-item">
              {index + 1}. {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
