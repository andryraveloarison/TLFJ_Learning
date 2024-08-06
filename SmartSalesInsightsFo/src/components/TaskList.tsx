import React from "react";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";



const TaskList: React.FC = () => {

    const taskList = useSelector((state: RootState) => state.taskList.taskList)

    
    return(
        <div>
            {
                taskList.map(task => <TaskItem task={task} key={task.id} />)
            }
        </div>
    )
} 


export default TaskList;