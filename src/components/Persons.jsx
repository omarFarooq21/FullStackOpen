
const Persons = ({peopleToShow}) => {
  return(
    <>
      {peopleToShow.map((person) => { return (<p key={person.id}>{person.name} {person.number}</p>) })}
    </>
  )
}
export default Persons