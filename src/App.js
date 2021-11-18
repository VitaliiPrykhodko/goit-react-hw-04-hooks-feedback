import { useState } from "react";
import Statistics from "./Statistics/Statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./Section/Section";
import Notification from "./Notification/Notification.jsx";

const App = function () {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedback = { good, bad, neutral };

  const handleIncrementFeedback = (option) => {
    switch (option) {
      case "good":
        return setGood((prev) => prev + 1);
      case "bad":
        return setBad((prev) => prev + 1);
      case "neutral":
        return setNeutral((prev) => prev + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((feedback.good / countTotalFeedback()) * 100);
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onClick={handleIncrementFeedback}
        />
      </Section>
      <Section>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
