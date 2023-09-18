import './TasksList.css';
import { Task } from "../components/Task";
import TaskType from '../models/Task';


type TasksListProps = {
    tasks: TaskType[];
    deleteTask: (id: number) => void;
    editTask: (id: number) => void;
};

export const TasksList = ({tasks, deleteTask, editTask}: TasksListProps) => {
    const tasksHtml = tasks.map(
        task => <Task task={task} deleteTask={deleteTask} editTask={editTask}/>)
    ;    
    return <div>{tasksHtml}</div>
}
