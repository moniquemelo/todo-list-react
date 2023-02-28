import checkButton from '../assets/check-button.svg'
import trash from '../assets/trash.svg'
import styles from './TaskList.module.css'
import { useState } from 'react'

export function TaskList({ title }) {
  const [tasks, setTasks] = useState([])
  
  return(
    <main className={styles.main}>
      <div className={styles.checkTasksText}>
        <button className={styles.checkBox}>
          <img src={checkButton}></img>
        </button>
        <p>{title}</p> 
      </div>

      <div className={styles.trash}>
        <button className={styles.buttonTrash}>
          <img src={trash}></img>
        </button>
      </div>
    </main>
  )
}