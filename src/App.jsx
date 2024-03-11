import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState( [ 
    { name: 'Arto Hellas'}
   ] )
   const [newName, setNewName] = useState('a new name...')

   const addPerson = (event) => {
    event.preventDefault()
    // console.log("Add Button Clicked:", event)

    let added = false;
    persons.forEach((element) => {
      if(element.name === newName)
      {
        added = true
      }
    })
    const nameObj = {
      name: newName,
    }
    if(!added)
    {
      setPersons(persons.concat(nameObj))
      alert(`added ${newName}`)
    }
    else if(added)
    {
      alert(`${newName} is already added!`)
    }
    
   }
   const handleChange = (event) => {
    setNewName(event.target.value)
   }

   return ( 
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type = "submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* map through the array of objects and create a list item for each object */} 
        {persons.map((person, index) => { return(<p key = {person.name}>{person.name}</p>)})}
    </div>
   )
}

export default App