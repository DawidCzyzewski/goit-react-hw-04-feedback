// -------------------------Clear code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------Commented code-------------------------------------

// Import necessary elements
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  static defaultProps = {
    defaultProp: 0,
  };
  static propTypes = {
    title: PropTypes.string,
    defaultProp: PropTypes.number,
  };

  state = {
    good: this.props.defaultProp,
    neutral: this.props.defaultProp,
    bad: this.props.defaultProp,
  };

  // Function to count all feedbacks
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // Function to count percentage of possitive feedbacks
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentageOfGoodFeeds = Math.round(
      (100 * good) / this.countTotalFeedback()
    );
    return percentageOfGoodFeeds === 0 ? 0 : percentageOfGoodFeeds;
  };

  // Function to handle clicked button
  handleClick = option => {
    this.setState(state => {
      return { [option]: state[option] + 1 };
    });
    this.countTotalFeedback();
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <Section title="Your opinion about us is important! How did you spend time?">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Our statistics:">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              options={this.state}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

// -------------------------Clear code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------Commented code-------------------------------------

// // Import necessary elements
// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Notification } from './Notification/Notification';

// export class App extends Component {
//   static defaultProps = {
//     defaultProp: 0,
//   };

//   static propTypes = {
//     title: PropTypes.string,
//     defaultProp: PropTypes.number,
//   };

//   state = {
//     good: this.props.defaultProp,
//     neutral: this.props.defaultProp,
//     bad: this.props.defaultProp,
//   };

//   // Function to count all feedbacks
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   // Function to count percentage of possitive feedbacks
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const percentageOfGoodFeeds = Math.round(
//       (100 * good) / this.countTotalFeedback()
//     );
//     // console.log(percentageOfGoodFeeds);
//     return percentageOfGoodFeeds === 0 ? 0 : percentageOfGoodFeeds;
//   };

//   // Function to handle clicked button
//   handleClick = option => {
//     // console.log(option);
//     this.setState(state => {
//       return { [option]: state[option] + 1 };
//     });
//     this.countTotalFeedback();
//   };

//   render() {
//     const { good, bad, neutral } = this.state;

//     // console.log(this.countTotalFeedback());
//     return (
//       <div>
//         <Section title="Your opinion about us is important! How did you spend time?">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>
//         <Section title="Our statistics:">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               options={this.state}
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positiveFeedback={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
