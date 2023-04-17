import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  // Add expected types of input
  static propTypes = {
    title: PropTypes.string.isRequired,
    // TODO: Should I use this? :
    // children: PropTypes.node.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <>
        <h5> {title} </h5>
        {children}
      </>
    );
  }
}
