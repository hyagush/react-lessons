import { useEffect, useState } from "react"

const myList = [
  { id: '1', value: 'Fruta' },
  { id: '2', value: 'Legumes' },
  { id: '3', value: 'Carnes' },
]

export default function App() {

  const [products, setProducts] = useState(myList)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if(pesquisa){
        const newList = myList.filter((item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProducts(newList)
      } else {
        setProducts(myList)
      }
    }
    , [pesquisa])

  console.log(pesquisa)

  return (
    <div>
      <h1>Efeitos Colaterais</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquise aqui..."
        type="text" />
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}

