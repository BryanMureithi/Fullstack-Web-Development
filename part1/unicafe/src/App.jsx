import { useState } from "react";

const Statistics = ({ good, bad, neutral, total, average, feedback }) => {
  if (total === 0) {
    return (
      <>
        <p>No feedback has been given!</p>
      </>
    );
  }
  return (
    <>
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total {total}</p>
        <p>Average {average}</p>
        <p>Positive Feedback {feedback}</p>
      </div>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [feedback, setFeedback] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setTotal(newGood + neutral + bad);
    setAverage(total / 3);
    setFeedback((newGood / total) * 100);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    console.log(newNeutral);
    setTotal(good + newNeutral + bad);
    setAverage(total / 3);
    setFeedback((good / total) * 100);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setTotal(good + neutral + newBad);
    setAverage(total / 3);
    setFeedback((good / total) * 100);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text={"Good"} />
        <Button handleClick={handleNeutralClick} text={"Neutral"} />
        <Button handleClick={handleBadClick} text={"Bad"} />
      </div>
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        feedback={feedback}
      />
    </>
  );
}

export default App;
