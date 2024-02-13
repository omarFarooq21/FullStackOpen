import {useState} from 'react'

const Display = (props) => {
  return(
    <div>
      {props.counter}
    </div>
  )
}
const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter+1)
  const reset = () => setCounter(0)

  return(
    <>
      <div>
        <Display counter={counter}/>
        <Button onClick={increment} text="Increment"/>
        <Button onClick={reset} text="Reset"/>

      </div>
    </>
    
  )
}
export default App