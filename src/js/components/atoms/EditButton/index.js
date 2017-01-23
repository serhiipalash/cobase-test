import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class EditButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`edit_button ${
          xsHidden ? 'edit_button--xs-hidden' :
          xsVisible ? 'edit_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        {this.svg.edit_white}
      </span>
    );
  }
}

EditButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default EditButton;
