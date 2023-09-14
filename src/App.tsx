import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data/tasks";
import { TaskFormModal } from "./components/TaskFormModal";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList"

const App = () => {
  const title = "To do list";
  const taskToEdit: any = null;
  // const tasks = data;
  const [tasks, setTasks] = useState(data);

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };


  const deleteTask = (taskId: number) => {
    setTasks(tasks => tasks.filter((task) => taskId !== task.id));
    console.error("I need to be implemented");
  };

  const [show, setShow] = useState(false);


  return (
    <div className="main">
      < Header title={title} />
      <TasksList tasks={tasks} deleteTask={deleteTask}/>
      <button
        className="add-task-btn"
        onClick={() => setShow(true)}
      >
        +
      </button>
      <TaskFormModal
        show={show}
        handleClose={() => setShow(false)}
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
              id: taskToEdit.id,
              title: taskToEdit.title,
              description: taskToEdit.description,
            }
            : undefined
        }
      />
    </div>
  );
};

export default App;
