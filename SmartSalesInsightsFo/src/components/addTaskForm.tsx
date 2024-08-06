import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTask } from './../redux/task'



interface AddTaskFormProps {
    addTask : (title: string)=> void
}

const AddTaskForm: React.FC<AddTaskFormProps> = () => {

    const [title, setTitle] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(title.trim()){
            dispatch(addTask(title))
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
            <button type="submit"> Add Task </button>
       </form>

    )
} 


export default AddTaskForm;