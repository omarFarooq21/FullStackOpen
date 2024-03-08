const Course = ({courses}) => {
  // console.log(courses[0])
  return(
    <>
    {
      courses.map( (course) => {
        return(
          <>
            <h1 key = {course.id}>
              {course.name}
            </h1>
            {
              <ul>
                {course.parts.map((part) => {
                  return(
                    <>
                      <li key={part.id}>{part.name} {part.exercises}</li>
                    </>
                  )
                })}
              </ul>
            }
          </>     
        )
       })
    }
    </>
  )
}
export default Course