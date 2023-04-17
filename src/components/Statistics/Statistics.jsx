import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;

    return (
      <>
        <div>Good feedbacks: {positiveFeedback}%</div>
        <div>Ammount of good: {good}</div>
        <div>Ammount of neutral: {neutral}</div>
        <div>Ammount of bad: {bad}</div>
        <div>Total feedbacks: {total}</div>
      </>
    );
  }
}

// -------------------------clear code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------Commented code-------------------------------------

// import { Component } from 'react';

// export class Statistics extends Component {
//   render() {
//     // console.log(this.props);
//     const { good, neutral, bad, total, positiveFeedback } = this.props;
//     // console.log(this.props);
//     // const object = this.props;
//     // console.log(options);
//     // const objects = Object.entries(options);
//     // console.log(objects)
//     return (
//       <>
//         {/* TODO: Why not working? */}
//         {/* {objects.map(option => (
//           <div>{option}</div>
//         ))} */}

//         {/* {arrOptions.map(option => (
//           <div>{console.log(option.keys())} </div>
//         ))} */}

//         <div>Good feedbacks: {positiveFeedback}%</div>
//         <div>Ammount of good: {good}</div>
//         <div>Ammount of neutral: {neutral}</div>
//         <div>Ammount of bad: {bad}</div>
//         <div>Total feedbacks: {total}</div>
//       </>
//     );
//   }
// }
