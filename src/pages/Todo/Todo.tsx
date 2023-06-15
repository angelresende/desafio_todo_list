import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Task } from "../../components/Task/Task";
import { NoTasks } from "../../components/TaskList/NoTasks";
import styles from "./Todo.module.css";
import { BsFillPlusCircleFill } from 'react-icons/bs'

interface ITask {
  id: number;
  title: string;
  isComplete: boolean;
}

export function Todo(){
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [lastId, setLastId] = useState<number>(0);
  
    function handleNewTask(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const newTaskData: ITask = {
        id: lastId + 1,
        title: newTask,
        isComplete: false
      };
  
      setTasks([...tasks, newTaskData]);
      setNewTask('');
      setLastId(lastId + 1);
    }
  
    function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
      setNewTask(event.target.value);
    }
  
    function deleteTask(id: number) {
      const taskList = tasks.filter(task => task.id !== id);
      setTasks(taskList);
    }
  
    function handleTaskCompleted(id: number) {
      const taskList = tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: !task.isComplete
          };
        }
        return task;
      });
      setTasks(taskList);
    }
  
    const completes = tasks.filter(task => task.isComplete);
  
    return (
      <>
        <Header />
  
        <form
            onSubmit={handleNewTask}
            className={styles.form}
          >
            <input
              required
              value={newTask}
              onChange={handleNewTaskChange}
              className={styles.input}
              type="text"
              placeholder="Adicione uma tarefa..."
            />
            <button
              className={styles.button}
              type="submit"              
            >
              Criar 
              <BsFillPlusCircleFill />
            </button>
        </form>
          
      
  
          {tasks.length > 0 && (
            <header className={styles.header}>
              <div >
                <span>Tarefas Criadas</span>
                <span>
                  {tasks.length}
                </span>
              </div>
  
              <div>
                <span>Concluídas</span>
                <span>
                  {completes.length} de {tasks.length}
                </span>
              </div>
            </header>
          )}
  
          {tasks.map(task => (
            <Task
              handleTaskCompleted={handleTaskCompleted}
              id={task.id}
              isComplete={task.isComplete}
              onDeleteTask={deleteTask}
              key={task.id}
              title={task.title}
              task={task}
            />
          ))} 
          
        {tasks.length === 0 && <NoTasks />}
      </>
    );

}