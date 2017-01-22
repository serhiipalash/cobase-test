import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    return (
      <span className="search_button" onClick={this.props.onClick}>
        {this.svg.search_button}
      </span>
    );
  }
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

export default SearchButton;
