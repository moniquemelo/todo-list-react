import styles from '../components/VoidTasks.module.css'
import voidTasks from '../assets/void-tasks.svg'

export function VoidTasks () {
  return(
    <section className={styles.voidTasksGroup}>
      <img src={voidTasks} alt="Prancheta" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  )
}
