import React, { Component } from "react";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification";
import { Wrapper } from "./App.styled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (key) => {
    this.setState((prevState) => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (Number(this.state.good) / this.countTotalFeedback()) * 100
    );
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            ></Statistics>
          )}
          {total === 0 && <Notification message="There is no feedback" />}
        </Section>
      </Wrapper>
    );
  }
}

export default App;
