import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class PlusButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick } = this.props;

    return (
      <span className="plus_button" onClick={onClick}>
        {this.svg.plus_button}
      </span>
    );
  }
}

PlusButton.propTypes = {
  onClick: PropTypes.func,
};

export default PlusButton;
