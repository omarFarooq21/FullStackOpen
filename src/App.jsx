const Hello = (props) => {
  if(props.age)
  {
    return(
      <> 
        <p>Hello {props.name}, you are {props.age} years old</p>
      </>
    )
  }
  
}

const App = () => {

  const name = "Peter"
  const age = 10
  return(
    //fragments <> used to group together multiple components and avoid "Extra" dom elements </>
    <div>
      <h1>
        Greetings!
      </h1>
      <Hello name="Alisha"/>
      <Hello name = {name} age={age}/>
    </div>
  )
}
export default App