const Course = ({course}) => {
  console.log(course.parts)
  const total = course.parts.reduce(
    (sum, course) => {
      return sum + course.exercises
    }, 0
  )
  console.log(total)
  return(
    <>
     <h1>
      {course.name}
     </h1>
     <ul>
      {course.parts.map( (item) => <li key = {item.id}>{item.name} {item.exercises}</li>) }
     </ul>

     <p>
      <b>total of {total} exercises </b>
     </p>

    </>
   
  )
}
export default Course