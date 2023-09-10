import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    if (option === 'Good') {
      setGood(good + 1);
    } else if (option === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'Bad') {
      setBad(bad + 1);
    }
  };
  const totalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const percentage = () => {
    return Math.round((good / totalFeedback()) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onClick={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            percentage={percentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
