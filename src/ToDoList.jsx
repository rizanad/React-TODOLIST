import { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState([
    "Eat rice",
    "Walk and run",
    "Enjoy the life",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  return (
    <div className="to-do-app">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter your task"
        />
        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="list">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="up-btn" onClick={() => moveUp(index)}>
              ☝️
            </button>
            <button className="down-btn" onClick={() => moveDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
