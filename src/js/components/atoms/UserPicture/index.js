import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class UserPicture extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { image, onClick, xsHidden, xsVisible } = this.props;

    return (
      <img
        className={`user_picture ${onClick ? ' user_picture--button' : ''}${
          xsHidden ? ' user_picture--xs-hidden' :
          xsVisible ? ' user_picture--xs-visible' : ''
        }`}
        src={image}
        onClick={onClick}
      />
    );
  }
}

UserPicture.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default UserPicture;
