import './App.css'
import TaskList from './components/TaskList'
import AddTaskForm from './components/addTaskForm'
import { RootState, AppDispatch } from './redux/store'
import { addTask, toogleTask, deleteTask } from './redux/task'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'


function App() {
  const taskList = useSelector((state: RootState) => state.taskList.taskList)
  const dispatch = useDispatch<AppDispatch>()

  const toogleTasks = (id: number) => {
    dispatch(toogleTask(id))
  }

  const deleteTasks = (id: number) => {
    dispatch(deleteTask(id))

  }

  const addTasks = (title: string) => {
    dispatch(addTask(title))
  }


  return (
    <Provider store={store}>
      <AddTaskForm addTask={addTasks}/>
      <TaskList tasks={taskList} toogleTask={toogleTasks} deleteTask={deleteTasks}/>

    </Provider>
  )
}

export default App
