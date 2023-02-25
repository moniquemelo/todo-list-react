import styles from './TaskList.module.css'
import plusIcon from '../assets/plus-icon.svg'
import voidTasks from '../assets/void-tasks.svg'
import { useState } from 'react'

export function TaskList() {
  const [tasks, setTasks] = useState('')
  
  return(
    <main>
      <form className={styles.taskList} action="">
        <input 
          type="text" 
          placeholder="Adicionar novo todo" 
          // value={newTaskTitle}
          />
        <button>
          <img src={plusIcon} alt="" />
          Criar
        </button>
      </form>

      <section className={styles.statsTask}>
        <div className={styles.createdTasksGroup}>
          <h2 className={styles.createdTasks}>Tarefas criadas</h2>
          <button>5</button>
        </div>

        <div className={styles.concludedTasksGroup}>
          <h2 className={styles.concludedTasks}>Concluídas</h2>
          <button>2 de 5</button>
        </div>
      </section>

      <section className={styles.voidTasksGroup}>
        <img src={voidTasks} alt="Prancheta" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </section>
    </main>
  )
}