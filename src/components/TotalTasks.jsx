import { TaskList } from './TaskList'
import styles from './TotalTasks.module.css'


export function TotalTasks({tasks}){
  return(
    <header className={styles.header}>
      <section className={styles.statsTask}>
        <div>
          <h2 className={styles.createdTasksText}>Tarefas criadas</h2>
          <span>{totalTasks}</span>
        </div>

        <div>
          <h2 className={styles.concludedTasksText}>Concluídas</h2>
          <span>2 de {totalTasks}</span>
        </div>
      </section>

      <section>
        {tasks.map(task => {
          <TaskList 
            key={task.id}
            task={task}
          />
        })}
        
      </section>
    </header>
  )
}

