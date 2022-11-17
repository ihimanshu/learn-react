export const Task = ({ id, taskName, completed, deleteTask, completeTask }) => {
  return (
    <li>
      <p style={{ backgroundColor: completed ? "green" : "transparent" }}>
        {taskName}
      </p>
      <button onClick={() => completeTask(id)}>Complete</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  );
};
