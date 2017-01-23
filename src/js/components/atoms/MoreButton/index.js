import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class MoreButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span className={`more_button ${
          xsHidden ? 'more_button--xs-hidden' :
          xsVisible ? 'more_button--xs-visible' : ''}`}
        onClick={onClick}>
        {this.svg.more_button}
      </span>
    );
  }
}

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default MoreButton;
