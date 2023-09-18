import React from "react";
import "./Task.css";
import TaskType from "../models/Task";

type TaskProps = {
  task: TaskType;
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
};

export const Task = ({task, deleteTask, editTask}: TaskProps) => {

  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={false} />
          <span className="checkmark"></span>
        </label>
        <p>{ task.title }</p>
      </div>
      <div className="task-actions">
        <button onClick={() => editTask(task.id)}>Edit</button>
        <button onClick={() => deleteTask(task.id) } >Delete</button>
      </div>
    </div>
  );
};
