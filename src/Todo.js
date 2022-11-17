import { useState } from "react";
import { Task } from "./Task";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const updateTask = todoList.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTodoList(updateTask);
  };

  return (
    <>
      <div className="addTask">
        <h1>TO DO</h1>
        <input placeholder="Add Task" onChange={handleChange} value={newTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        <ul>
          {todoList.length ? (
            todoList.map((task) => (
              <Task
                key={task.id}
                {...task}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            ))
          ) : (
            <li>No Task</li>
          )}
        </ul>
      </div>
    </>
  );
};
