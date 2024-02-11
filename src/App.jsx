const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.content.forEach( (element, index) => {
        if(index%2 == 0)
        {
          const para = document.createElement('p')
          para.textContent =  `${element} ${props.content[index+1]}`;
          document.body.appendChild(para)
          console.log(element, index)
        }
      })} 
    </p>
     
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