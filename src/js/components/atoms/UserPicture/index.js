import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class UserPicture extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { image, onClick } = this.props;

    return (
      <img
        className={`user_picture ${onClick ? ' user_picture--button' : ''}`}
        src={image}
        onClick={onClick}
      />
    );
  }
}

UserPicture.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
};

export default UserPicture;
