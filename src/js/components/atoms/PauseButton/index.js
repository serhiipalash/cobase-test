import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class PauseButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`pause_button ${
          xsHidden ? 'pause_button--xs-hidden' :
          xsVisible ? 'pause_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        {this.svg.pause}<span className="pause_button__title">Pause task</span>
      </span>
    );
  }
}

PauseButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default PauseButton;
