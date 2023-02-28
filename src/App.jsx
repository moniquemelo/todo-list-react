import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { VoidTasks } from './components/VoidTasks'
import { TotalTasks } from './components/TotalTasks'

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
  const totalTasks = tasks.length
  
  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <TotalTasks/> 
        {/* <TaskList/>  */}
        {/* <VoidTasks/> */}

        {tasks.map(task => {
            return (
              <TaskList
                key={task.id} 
                title={task.title}
              />
            )
          })}
      </div>        

    </div>
  )
}
