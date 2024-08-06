import React from "react";
import { Task } from "../types/task";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { toogleTask, deleteTask } from './../redux/task'

interface TaskItemProps {
    task: Task ; 
}


  
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {

    const dispatch = useDispatch<AppDispatch>()


    const toogleTasks = (id: number) => {
        dispatch(toogleTask(id))
    }

    const deleteTasks = (id: number) => {
        dispatch(deleteTask(id))

    }
    
    return(
        <div>
            <span>{task.id}</span>
            <input type="checkbox"
                checked={task.completed}
                onChange={() => toogleTasks(task.id)}
            />
            <span style={{'textDecoration' : task.completed ? 'line-through' : 'none'}}>{task.title}</span>
            <button onClick={() => deleteTasks(task.id)} >Delete</button>
        </div>
    )
} 


export default TaskItem;