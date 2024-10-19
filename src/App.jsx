import { useState } from "react"

const App = () => {
  const [counter, setCounter ] = useState(0);

  return (
    <>
    <p>{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>Plus</button>
    <button onClick={() => setCounter(0)}>Zero</button>
    </>
  )
}

export default App
