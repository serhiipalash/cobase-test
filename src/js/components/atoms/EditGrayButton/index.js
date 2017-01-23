import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class EditGrayButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`edit_gray_button ${
          xsHidden ? 'edit_gray_button--xs-hidden' :
          xsVisible ? 'edit_gray_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        {this.svg.edit_gray}
      </span>
    );
  }
}

EditGrayButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default EditGrayButton;
