import './App.css'
import TaskList from './components/TaskList'
import AddTaskForm from './components/addTaskForm'
import { RootState, AppDispatch } from './redux/store'
import { addTask, toogleTask, deleteTask } from './redux/task'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'
import React from 'react'


function App() {
  const dispatch = useDispatch<AppDispatch>()


  const addTasks = (title: string) => {
    dispatch(addTask(title))
  }


  return (
    <Provider store={store}>
      <AddTaskForm addTask={addTasks}/>
      <TaskList />
    </Provider>
  )
}

export default App
