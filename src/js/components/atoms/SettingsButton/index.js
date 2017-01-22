import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class SettingsButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    return (
      <span className="settings_button" onClick={this.props.onClick}>
        {this.svg.settings_button}
      </span>
    );
  }
}

SettingsButton.propTypes = {
  onClick: PropTypes.func,
};

export default SettingsButton;
