const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}
const Part = (props) => {
  return(
    <p>
      {props.name} - {props.exercise}
    </p>
  )
}
const Content = (props) => {
  console.log("Content Props: ",props)
  return (
    <div>
      <Part name = {props.course.parts[0].name} exercise = {props.course.parts[0].exercises} />
      <Part name = {props.course.parts[1].name} exercise = {props.course.parts[1].exercises} />
      <Part name = {props.course.parts[2].name} exercise = {props.course.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  console.log("Total Props: ", props)
  let total = 0;
  props.course.parts.forEach( (element, index) => {
    total += element.exercises;
  });
  
  return(
    <p>Number of Exercises: {total}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
    <Header course = {course}/>
    <Content course = {course}/>
    <Total course = {course}/>
    </>
  )
}
export default App