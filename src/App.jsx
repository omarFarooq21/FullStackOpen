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
  console.log("Content Props: ",props)
  return (
    <div>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  console.log("Total Props: ", props)
  let total = 0;
  props.parts.forEach( (element, index) => {
    total += element.exercises;
  });
  
  return(
    <p>Number of Exercises: {total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
    <Header course = {course}/>
    <Content parts = {parts}/>
    <Total parts={parts}/>
    </>
  )
}
export default App