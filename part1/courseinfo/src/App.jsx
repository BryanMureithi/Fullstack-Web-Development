function Header(props) {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

function Content() {
  const parts = [
    {
      name: "Fundamentals",
      exercises: 10,
    },
    {
      name: "Using Props to Pass Data",
      exercises: 7,
    },
    {
      name: " State of a Component ",
      exercises: 14,
    },
  ];
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </>
  );
}

function Total(props) {
  console.log(props);
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

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals",
      exercises: 10,
    },
    {
      name: "Using Props to Pass Data",
      exercises: 7,
    },
    {
      name: " State of a Component ",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </>
  );
};

export default App;
