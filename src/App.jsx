import {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter+1)
  }
  // setTimeout(
  //   () => setCounter(counter+1), 1000
  // )
  console.log("rendering...", counter)
  return(
    <>
    <div>
      {counter}
    </div>
    <button onClick={handleClick}>
      Increment
    </button>
    <button onClick={ () => setCounter(0)}>
      Reset
    </button>
    </>
    
  )
}
export default App