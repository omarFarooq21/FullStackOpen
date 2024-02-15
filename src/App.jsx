import { useState } from 'react'

const Button = (props) => {
  return( 
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}
const Statistics = ({good, bad, neutral}) => {
  return(
    <>
     <h1>
      Statistics
    
     </h1>
     <p>good {good}</p>
     <p>bad {bad}</p>
     <p>neutral {neutral}</p>
    </> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good+1)
    console.log("Good: ", good)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  return (
    <div>
      <h1> Give Feedback </h1>
      <Button text = {`Good: ${good}`} handleClick = {handleGoodClick}/>
      <Button text = {`Bad: ${bad}`} handleClick = {handleBadClick}/>
      <Button text = {`Neutral: ${neutral}`} handleClick= {handleNeutralClick} />
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App