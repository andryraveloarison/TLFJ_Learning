import { Task } from "../types/task";

interface TaskItemProps {
    task: Task ; 
    toogleTask: (id: number) => void;
    deleteTask: (id: number) => void

}

const TaskItem: React.FC<TaskItemProps> = ({ task, toogleTask , deleteTask}) => {
    return(
        <div>
            <input type="checkbox"
                checked={task.completed}
                onChange={() => toogleTask(task.id)}
            />
            <span style={{'textDecoration' : task.completed ? 'line-through' : 'none'}}>{task.title}</span>
            <button onClick={() => deleteTask(task.id)} >Delete</button>
        </div>
    )
} 


export default TaskItem;