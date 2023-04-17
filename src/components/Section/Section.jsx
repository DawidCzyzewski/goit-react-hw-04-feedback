import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h5> {title} </h5>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// -------------------------func component code-----------------------------------------
// -------------------------UNCOMMENT ABROVE OR UNDER--------------------------
// -------------------------class component code-------------------------------------

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// export class Section extends Component {
//   // Add expected types of input
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
//   };

//   render() {
//     const { title, children } = this.props;
//     return (
//       <>
//         <h5> {title} </h5>
//         {children}
//       </>
//     );
//   }
// }
