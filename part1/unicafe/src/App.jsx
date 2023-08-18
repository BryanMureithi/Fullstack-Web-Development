import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

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
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="Bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="Total" value={total} />
          </tr>
          <tr>
            <StatisticLine text="Average" value={average} />
          </tr>
          <tr>
            <StatisticLine text="Positive Feedback" value={feedback} />
          </tr>
        </tbody>
      </table>
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
    const newTotal = newGood + neutral + bad;
    setTotal(newTotal);
    setAverage(newTotal / 3);
    setFeedback((newGood / newTotal) * 100);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    const newTotal = good + newNeutral + bad;
    setTotal(newTotal);
    setAverage(newTotal / 3);
    setFeedback((newNeutral / newTotal) * 100);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    const newTotal = good + neutral + newBad;
    setTotal(newTotal);
    setAverage(newTotal / 3);
    setFeedback((newBad / newTotal) * 100);
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
