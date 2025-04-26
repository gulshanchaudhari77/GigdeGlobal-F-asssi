
const TaskList = ({ tasks }) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={t._id} className="task-item">
            <span className="task-number">{index + 1}.</span>
            <span className="task-title">{t.title}</span>
            <span className="task-description">{t.description}</span>
            <span className={`task-status ${t.status.replace(/\s/g, '').toLowerCase()}`}>
              {t.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
