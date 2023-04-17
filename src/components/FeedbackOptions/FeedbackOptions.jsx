import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((option, i) => (
        <button
          key={i}
          type="button"
          onClick={event => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import propTypes from 'prop-types';

// export class FeedbackOptions extends Component {
//   static propTypes = {
//     onLeaveFeedback: propTypes.function,
//     options: propTypes.object,
//   };
//   render() {
//     const { onLeaveFeedback, options } = this.props;
//     return (
//       <>
//         {options.map((option, i) => (
//           <button
//             key={i}
//             type="button"
//             onClick={event => {
//               onLeaveFeedback(option);
//             }}
//           >
//             {option}
//           </button>
//         ))}
//       </>
//     );
//   }
// }
