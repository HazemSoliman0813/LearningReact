import { useState } from "react"

const Display = ({ counter }) => <div><p>{counter}</p></div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter ] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const setZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter}></Display>
      <Button onClick={increaseCounter} text="Plus"></Button>
      <Button onClick={decreaseCounter} text="Minus"></Button>
      <Button onClick={setZero} text="Zero"></Button>
    </>
  )
}

export default App
