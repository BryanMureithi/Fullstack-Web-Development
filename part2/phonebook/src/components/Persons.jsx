const Persons = ({ people, handleClick }) => {
  return (
    <>
      {people.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleClick(person.id)}>Delete</button>
        </p>
      ))}
    </>
  );
};

export default Persons;
