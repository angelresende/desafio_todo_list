import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

interface IFormValues {
    name: string;
    password: string;
  }

export function Login(){
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<IFormValues>({
        name: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
    }));
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formValues.name || !formValues.password) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }

        navigate("/my-todo");
       
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <h2>Crie suas listas de tarefa...</h2>
            </div>

            <div className={styles.column}>
                <div className={styles.wrapper}>
                    <h3>Faça seu login</h3>
                    <form onSubmit={handleSubmit}>
                        <input 
                            placeholder="Login"
                            className={styles.input}
                            id="name"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            className={styles.input}
                            placeholder="Senha"
                            type="password"
                            id="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            required 
                        />
                        <button type="submit" className={styles.button}>
                            Logar
                        </button>  
                    </form>
                </div>
            </div>
        </div>
    )
}