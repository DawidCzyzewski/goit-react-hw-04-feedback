import { Component } from 'react';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: propTypes.function,
    options: propTypes.object,
  };
  render() {
    const { onLeaveFeedback, options } = this.props;
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
  }
}

// -------------------------Clear code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------Commented code-------------------------------------

// import { Component } from 'react';

// export class FeedbackOptions extends Component {
//   render() {
//     // console.log(this.props);

//     const { onLeaveFeedback, options } = this.props;

//     // const { good, neutral, bad } = options;

//     // options.map((option, i) => {
//     // console.log(option);
//     // });

//     return (
//       <>
//         {/* {console.log(options)} */}
//         {options.map((option, i) => (
//           <button
//             key={i}
//             type="button"
//             onClick={event => {
//               // console.log(event.target.textContent);
//               // console.log(option);

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
