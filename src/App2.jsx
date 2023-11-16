import { useState } from "react"
import styles from './button.module.css'

export default function App1() {

  const [counter, setContador] = useState(0)

  function aumentar() {
    setContador(counter + 1)
  }

  function diminuir() {
    setContador(counter - 1)
  }

  return (
    <div className='container'>
      <h1>Meu Contador</h1>
      <h3>{counter}</h3>
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
    </div>
  )
}

