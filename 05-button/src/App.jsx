import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)
  const handleButtonIncrementar = () => {setCount(count+1)}
  const handleButtonDecrementar = () => {setCount(count-1)}
  const handleButtonReiniciar = () => {setCount(0)}
  return (
    <div>
      <h1>Button</h1>
      <hr />
      <h1>{count}</h1>
      <button onClick={handleButtonIncrementar}>Incrementar</button>
      <button onClick={handleButtonReiniciar}>Reiniciar</button>
      <button onClick={handleButtonDecrementar}>Decrementar</button>
    </div>
  )
}

export default App
