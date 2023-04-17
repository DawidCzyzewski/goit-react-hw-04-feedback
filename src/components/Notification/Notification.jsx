import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import propTypes from 'prop-types';

// export class Notification extends Component {
//   static propTypes = {
//     message: propTypes.string.isRequired,
//   };
//   render() {
//     const { message } = this.props;
//     return <p>{message}</p>;
//   }
// }
