import { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
  static propTypes = {
    message: propTypes.string.isRequired,
  };
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}
