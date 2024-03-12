import { useState } from "react";
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456789', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //filter 2.9*
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const peopleToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().startsWith(filter))


  const addPerson = (event) => {
    event.preventDefault()
    // console.log("Add Button Clicked:", event)

    let added = false;
    persons.forEach((element) => {
      if (element.name === newName && element.number === newNumber) {
        added = true
      }
    })
    const nameObj = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    if (!added) {
      setPersons(persons.concat(nameObj))
      alert(`added ${newName}`)
    }
    else if (added) {
      alert(`${newName} is already added!`)
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const filterPeople = (event) => {
    setShowAll(false)
    setFilter(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilter={filterPeople} />

      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons peopleToShow={peopleToShow}/>
    </div>
  )
}

export default App