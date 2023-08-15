function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

function Content() {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </>
  );
}

function Total(props) {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  );
}

function Part(props) {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
}

function App() {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
}

export default App;
