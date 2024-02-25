const Course = ({course}) => {
  console.log(course.parts)
  return(
    <>
     <h1>
      {course.name}
     </h1>
     <ul>
      {course.parts.map( (item) => <li key = {item.id}>{item.name} {item.exercises}</li>) }
     </ul>

    </>
   
  )
}
export default Course