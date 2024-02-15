import { useState } from 'react'

const Button = (props) => {
  return( 
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}
const Statistics = ({good, bad, neutral, allRatings}) => {
  let sum = 0;
  allRatings.forEach(element => {
    sum += element;
  })
  const percentGood = Math.round((good / allRatings.length)*100)
  const average = sum/allRatings.length
  return(
    <>
     <h1>
      Statistics
    
     </h1>
     <p>good {good}</p>
     <p>bad {bad}</p>
     <p>neutral {neutral}</p>
     <p>all {allRatings.length}</p>
     <p>average: {average}</p>
     <p>positive: {`${percentGood}%`}</p>
    </> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allRatings, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good+1)
    console.log("Good: ", good)
    setAll(allRatings.concat(1))
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAll(allRatings.concat(-1))
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(allRatings.concat(0))
  }
  return (
    <div>
      <h1> Give Feedback </h1>
      <Button text = {`Good: ${good}`} handleClick = {handleGoodClick}/>
      <Button text = {`Bad: ${bad}`} handleClick = {handleBadClick}/>
      <Button text = {`Neutral: ${neutral}`} handleClick= {handleNeutralClick} />
      <Statistics good = {good} bad = {bad} neutral = {neutral} allRatings = {allRatings}/>
    </div>
  )
}

export default App