import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class HamburgerMenuButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`hamburger_menu_button ${
          xsHidden ? 'hamburger_menu_button--xs-hidden' :
          xsVisible ? 'hamburger_menu_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        {this.svg.hamburger_menu_button}
      </span>
    );
  }
}

HamburgerMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default HamburgerMenuButton;
