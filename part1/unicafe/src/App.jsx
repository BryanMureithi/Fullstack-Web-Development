import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
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
      <div>
        <p>Good {clicks.good}</p>
        <p>Neutral {clicks.neutral}</p>
        <p>Bad {clicks.bad}</p>
      </div>
    </>
  );
}

export default App;
