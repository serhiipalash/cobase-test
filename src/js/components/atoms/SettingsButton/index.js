import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class SettingsButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`settings_button ${
          xsHidden ? 'settings_button--xs-hidden' :
          xsVisible ? 'settings_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        {this.svg.settings_button}
      </span>
    );
  }
}

SettingsButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default SettingsButton;
