import PropTypes from 'prop-types';
import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = ({ title, defaultProp }) => {
  const [good, setGood] = useState(defaultProp);
  const [neutral, setNeutral] = useState(defaultProp);
  const [bad, setBad] = useState(defaultProp);

  // Function to count all feedbacks
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // Function to count percentage of possitive feedbacks
  const countPositiveFeedbackPercentage = () => {
    const percentageOfGoodFeeds = Math.round(
      (100 * good) / countTotalFeedback()
    );
    return percentageOfGoodFeeds === 0 ? 0 : percentageOfGoodFeeds;
  };

  // Function to handle clicked button
  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section
        title={
          title || 'Your opinion about us is important! How did you spend time?'
        }
      >
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Our statistics:">
        {countTotalFeedback() > 0 ? (
          <Statistics
            options={{ good, neutral, bad }}
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

App.defaultProps = {
  defaultProp: 0,
};

App.propTypes = {
  title: PropTypes.string,
  defaultProp: PropTypes.number,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

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
//     return percentageOfGoodFeeds === 0 ? 0 : percentageOfGoodFeeds;
//   };

//   // Function to handle clicked button
//   handleClick = option => {
//     this.setState(state => {
//       return { [option]: state[option] + 1 };
//     });
//     this.countTotalFeedback();
//   };

//   render() {
//     const { good, bad, neutral } = this.state;
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
