import React from "react";
import "./Task.css";
import TaskType from "../models/Task";
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'

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
        <button onClick={() => editTask(task.id)}><AiFillEdit /></button>
        <button onClick={() => deleteTask(task.id) } ><AiFillDelete /></button>
      </div>
    </div>
  );
};
