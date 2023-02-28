import styles from './Header.module.css'
import toDoLogo from '../assets/to-do-logo.svg'
import plusIcon from '../assets/plus-icon.svg'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={toDoLogo} alt='Logotipo do todo'/>
      <form className={styles.formCreateTask} action="">
        <input 
          type="text" 
          placeholder="Adicionar novo todo" 
        />
        <button>
          <img src={plusIcon} alt="" />
          Criar
        </button>
      </form>
    </header>
  )
}