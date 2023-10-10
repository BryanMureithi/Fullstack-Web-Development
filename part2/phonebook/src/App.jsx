import { useState, useEffect } from "react";
import personServices from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    personServices.getAll().then((response) => {
      setPersons(response.data);
    });
  });

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.some((person) => person.name === newName);

    if (existingPerson) {
      const replace = window.confirm(
        `User is already added to phonebook,replace the old number with a new one?`
      );
      if (replace) {
        const updatedPerson = { ...existingPerson, number: newNumber };

        personServices
          .update(existingPerson.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? response.data : person
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.error("Error updating user:", error);
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      personServices
        .add(personObject)
        .then(
          (response) => setPersons(persons.concat(response.data)),
          setNewName(""),
          setNewNumber("")
        );
    }
  };

  const removePerson = (id) => {
    const shouldDelete = window.confirm("Delete this user?");
    if (shouldDelete) {
      personServices
        .remove(id)
        .then(() => {
          //Update the state by filtering out the delted person
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting the user: ", error);
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchTerm} handler={handleSearchChange} />
      <h2>Add a new number</h2>
      <PersonForm
        submit={addPerson}
        value1={newName}
        change1={handleNameChange}
        value2={newNumber}
        change2={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons people={filteredPersons} handleClick={removePerson} />
    </div>
  );
};

export default App;
