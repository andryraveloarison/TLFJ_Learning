import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[] ; 
    toogleTask: (id: number) => void;
    deleteTask: (id: number) => void

}

const TaskList: React.FC<TaskListProps> = ({ tasks, toogleTask , deleteTask}) => {

    return(
        <div>
            {
                tasks.map(task => <TaskItem task={task} key={task.id} toogleTask={toogleTask} deleteTask={deleteTask}/>)
            }
        </div>
    )
} 


export default TaskList;