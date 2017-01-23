import React, { Component, PropTypes } from 'react';

import editBtnWhite2x from '../../../../../static/img/edit_btn_white@2x.png';

import './style.scss';


class EditButton extends Component {
  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <img
        className={`edit_button ${
          xsHidden ? 'edit_button--xs-hidden' :
          xsVisible ? 'edit_button--xs-visible' : ''}`}
        src={editBtnWhite2x}
        onClick={onClick}
      />
    );
  }
}

EditButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default EditButton;
