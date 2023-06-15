import List from '../../assets/list.png';
import styles from "./NoTask.module.css";

export const NoTasks = () => {
    return (
        <div className={styles.container}>
            <img src={List} alt="Logo List" />
            <div className={styles.box}>
                <p>Você ainda não tem tarefas cadastradas.</p>
                <p>Crie tarefas e organize seus itens a fazer!</p>
            </div>
        </div>
    )
}