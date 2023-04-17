import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <div>Good feedbacks: {positiveFeedback}%</div>
      <div>Ammount of good: {good}</div>
      <div>Ammount of neutral: {neutral}</div>
      <div>Ammount of bad: {bad}</div>
      <div>Total feedbacks: {total}</div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// export class Statistics extends Component {
//   static propTypes = {
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//     total: PropTypes.number,
//     positiveFeedback: PropTypes.number,
//   };

//   render() {
//     const { good, neutral, bad, total, positiveFeedback } = this.props;

//     return (
//       <>
//         <div>Good feedbacks: {positiveFeedback}%</div>
//         <div>Ammount of good: {good}</div>
//         <div>Ammount of neutral: {neutral}</div>
//         <div>Ammount of bad: {bad}</div>
//         <div>Total feedbacks: {total}</div>
//       </>
//     );
//   }
// }
