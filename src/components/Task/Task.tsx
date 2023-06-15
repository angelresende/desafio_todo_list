import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from "./Task.module.css";

interface ITaskProps {
  id: number,  
  title: string;
  isComplete: boolean;
  onDeleteTask: (taskId: number) => void;
  task: {
    id: number;
    isComplete: boolean;
  };
  handleTaskCompleted: (taskId: number) => void;
}

export const Task: React.FC<ITaskProps> = ({ title, onDeleteTask, task, handleTaskCompleted }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li key={task.id} className={styles.task}>
                    <input
                        defaultChecked={task.isComplete}
                        onClick={() => handleTaskCompleted(task.id)}
                        type="checkbox"
                    />
                    <span
                        className={task.isComplete ? styles.taskComplete : styles.taskIncomplete}
                    >
                        {title}
                    </span>
                    <button
                        onClick={() => onDeleteTask(task.id)}
                        type='button'
                        className={task.isComplete ? styles.complete : styles.incomplete}
                        >
                            <RiDeleteBin6Line />
                    </button>
                </li>
            </ul>
        </div>

    )
}