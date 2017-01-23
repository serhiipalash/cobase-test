import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`search_button ${
          xsHidden ? 'search_button--xs-hidden' :
          xsVisible ? 'search_button--xs-visible' : ''}`}
        onClick={onClick}>
        {this.svg.search_button}
      </span>
    );
  }
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default SearchButton;
