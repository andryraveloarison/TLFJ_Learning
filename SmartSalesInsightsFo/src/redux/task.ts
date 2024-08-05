import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";

export interface taskListState {
    taskList: Task[]
}


const initialState: taskListState= {
    taskList: []
}


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<string>) => {
            const taskList = state.taskList
            state.taskList = [...taskList, {id: taskList.length, completed: false, title: action.payload }]
        },
        toogleTask: (state, action: PayloadAction<number>) => {
            const id = action.payload
            const taskList = state.taskList
            state.taskList = taskList.map(task => task.id === id ? {id: id, title: task.title, completed: !task.completed} : task)
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            const taskList = state.taskList
            state.taskList = taskList.filter(task => task.id != action.payload)

        }
    }

})


export const { addTask, toogleTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;