import { useState } from 'react'

const Button = (props) => {
  return( 
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}
const StatisticLine = ({text, value}) => {
  return(
    <>
    <table>
      <colgroup>
        <col style={{width:90}}/>
        <col/>
      </colgroup>
      <tbody>
        <tr>
          <td>
            {text}
          </td>
          <td>
            {value}
          </td>
        </tr>
      </tbody>
    </table>
    </>
  )
}
const Statistics = ({good, bad, neutral, allRatings, Feedback}) => {
  let sum = 0;
  allRatings.forEach(element => {
    sum += element;
  })
  const percentGood = Math.round((good / allRatings.length)*100)
  const average = sum/allRatings.length
  if(Feedback)
  {
    return(
      <>
       <h1>
        Statistics
       </h1>
       <StatisticLine text="good" value={good}/>
       <StatisticLine text="bad" value={bad}/>
       <StatisticLine text="neutral" value={neutral}/>
       <StatisticLine text="all" value={allRatings.length}/>
       <StatisticLine text="average" value={average}/>
       <StatisticLine text="postivie" value={`${percentGood}%`}/>
       {/* <p>good {good}</p>
       <p>bad {bad}</p>
       <p>neutral {neutral}</p>
       <p>all {allRatings.length}</p>
       <p>average: {average}</p>
       <p>positive: {`${percentGood}%`}</p> */}
      </> 
    )
  }
  else {
    return(
      <>
        <h1>
          Statistics
        </h1>
        <p>
          No feedback given
        </p>
      </>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allRatings, setAll] = useState([])
  const [feedback, setFeedback] = useState(false)
  const handleGoodClick = () => {
    setGood(good+1)
    console.log("Good: ", good)
    setAll(allRatings.concat(1))
    setFeedback(true)
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAll(allRatings.concat(-1))
    setFeedback(true)
  }
  const handleNeutralClick = () => {
    console.log(feedback, "Feedback before making any changes")
    setFeedback(true)
    console.log(feedback, "on neutral before changing neutral")
    setNeutral(neutral+1)
    setAll(allRatings.concat(0))
    console.log(feedback, "on neutral after setting feedback: true and neutral++")
  }
  return (
    <div>
      <h1> Give Feedback </h1>
      <Button text = {`Good: ${good}`} handleClick = {handleGoodClick}/>
      <Button text = {`Bad: ${bad}`} handleClick = {handleBadClick}/>
      <Button text = {`Neutral: ${neutral}`} handleClick= {handleNeutralClick} />
      <Statistics good = {good} bad = {bad} neutral = {neutral} allRatings = {allRatings} Feedback = {feedback}/>
    </div>
  )
}

export default App