import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

import './global.css'
import styles from './App.module.css'

const tasks = [
  {
    id: 1,
    title: 'Terminar modulo 2 de React do Ignite',
    isComplete: false
  },

  {
    id: 2,
    title: 'Estudar Big Query',
    isComplete: true
  }
]

export function App() {
  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <TaskList/>
      </div>

    </div>
  )
}
