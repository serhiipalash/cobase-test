import React, { Component, PropTypes } from 'react';

import './style.scss';


class CompleteButton extends Component {
  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`complete_button ${
          xsHidden ? 'complete_button--xs-hidden' :
          xsVisible ? 'complete_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        Complete
      </span>
    );
  }
}

CompleteButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default CompleteButton;
