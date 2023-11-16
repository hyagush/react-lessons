import { useEffect, useState } from "react"

const tasks = [
  {id: '1', title: 'Tarefa 1'},
  {id: '2', title: 'Tarefa 2'},
  {id: '3', title: 'Tarefa 3'},
  {id: '4', title: 'Tarefa 4'},
  {id: '5', title: 'Tarefa 5'},
  {id: '6', title: 'Tarefa 6'},
  {id: '7', title: 'Tarefa 7'},
]

export default function App1() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function buscarDados() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      const finalResult = await result.json()
      return finalResult
    }
    buscarDados().then(res => setTasks(res))

  }, [])


  return (
    <div>
      <h1>Buscando com Fetch</h1>
      <ul>
      {tasks.map((task) => {
        return (
          <div>
          <li key={task.id}>{task.title}
          {task.completed ? <span> - Tarefa concluída</span> : null}
          </li>
          
          </div>
        )
        })}
      </ul>
    </div>
  )
}

