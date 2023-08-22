const Course = ({ course }) => {
  return (
    <div>
      {course.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                {part.name} - {part.exercises} exercises
              </li>
            ))}
          </ul>
          <p>
            <strong>
              Total exercises:{" "}
              {course.parts.reduce((total, part) => total + part.exercises, 0)}
            </strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Course;
