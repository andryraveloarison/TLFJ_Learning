import React, { useState } from "react";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface AddTaskFormProps {
    addTask : (title: string)=> void

}

const AddTaskForm: React.FC<AddTaskFormProps> = ({addTask}) => {

    const [title, setTitle] = useState<string>('')

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(title.trim()){
            addTask(title)
            setTitle('')
        }
    }


    return(

       <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new task"
            /> 
            <button type="submit"> Add Task</button>
       </form>

    )
} 


export default AddTaskForm;