const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} - {props.exercise}
    </p>
  )

}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.content[0]} exercise = {props.content[1]} />
      <Part part = {props.content[2]} exercise = {props.content[3]} />
      <Part part = {props.content[4]} exercise = {props.content[5]} />
    </div>
     
  )
}

const Total = (props) => {
  return(
    <p>Number of Exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}


const App = () => {
 const course = "Half Stack App Development"
 const part1 = 'Fundamentals of React'
 const exercises1 = 10
 const part2 = 'Using props to pass data'
 const exercises2 = 7
 const part3 = 'State of a component'
 const exercises3 = 14

 const content = [ 
  part1, exercises1, part2, exercises2, part3, exercises3
 ]

  return (
    <>
     <Header course = {course}/>
     <Content content = {content}/>
     <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>

  )
}

export default App