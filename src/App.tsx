import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data/tasks";
import { TaskFormModal } from "./components/TaskFormModal";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList"
import TaskType from "./models/Task";

const App = () => {
  const title = "To do list";
  // const taskToEdit: any = null;
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null);
  // const tasks = data;
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState(data);
  // const [key, setKey] = useState(0);

  const tasksId = tasks.map((task) => task.id);
  const lastId = Math.max(...tasksId);

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };
  function resetForm() {
    setShow(false);
    setTaskToEdit(null);
    // setKey(key + 1);
  }


  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskTitle = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();
    if(!taskTitle || !description) {
      return;
    }
    if(!taskToEditId) {
      setTasks([{id: lastId+1, title: taskTitle, description: description, done: false}, ...tasks ]);
    } else {
      const updatedTask = [...tasks];
      const index = updatedTask.findIndex((element) => taskToEditId === element.id);
      updatedTask[index].title = title;
      updatedTask[index].description = description;

      setTasks(updatedTask);
    }
    event.target.reset();
    resetForm();

  };

  const editTask = (taskId: number) => {
    const selectTask = tasks.find((element) => taskId === element.id);
    if (selectTask === undefined) {
      return;
    }
    setTaskToEdit(selectTask);
    setShow(true);
    // setKey(key + 1);
    return taskId;
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks => tasks.filter((task) => taskId !== task.id));
    console.error("I need to be implemented");
  };



  return (
    <div className="main">
      < Header title={title} />
      <TasksList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
      <button
        className="add-task-btn"
        onClick={() => setShow(true)}
      >
        +
      </button>
      <TaskFormModal
        // key={key}
        show={show}
        handleClose={resetForm}
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
