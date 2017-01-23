import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class CalendarButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`calendar_button ${
          xsHidden ? 'calendar_button--xs-hidden' :
          xsVisible ? 'calendar_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        {this.svg.calendar_white}
      </span>
    );
  }
}

CalendarButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default CalendarButton;
