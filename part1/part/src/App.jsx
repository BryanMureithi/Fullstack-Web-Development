const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Tasha";
  const age = 50;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Byan" age="10" />
      <Hello name={name} age={age} />
      <Hello />
    </div>
  );
};

export default App;
