const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ course }) => {
  return (
    <>
      {course.parts.map((item) => (
        <p key={item.id}>
          {item.name} {item.exercises}
        </p>
      ))}
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <Part course={course} />
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

export default Course;
