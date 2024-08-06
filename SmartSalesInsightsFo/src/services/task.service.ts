import axios from "axios";
import { TodoInterface } from '../../../smart-sales-insights-bo/src/todo/types/TodoInterface'


 const API_URL = 'http://localhost:3000/todo'

 const getTask = async (): Promise<TodoInterface[]> =>{
    const result = await axios.get(API_URL)
    return result.data
}

 const createTask = async (todo: Omit<TodoInterface, 'id'>): Promise<TodoInterface> =>{
    const result = await axios.post(API_URL, todo)
    return result.data
}

 const getOneTask = async (id: number): Promise<TodoInterface> =>{
    const result = await axios.get(`${API_URL}\\${id}`)
    return result.data
}

const updateTask = async (todo: TodoInterface): Promise<TodoInterface> =>{
    const result = await axios.put(API_URL, todo)
    return result.data
}

 const deleteTask = async (id: number): Promise<TodoInterface> =>{
    alert(API_URL + "/"+id)
    const result = await axios.delete(API_URL + "/"+id)
    return result.data
}


export const taskService = {
    createTask, getOneTask, deleteTask, getTask, updateTask
}