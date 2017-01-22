import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class SideBarOptionsItem extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { icon, title, info, pathname } = this.props;

    return (
      <Link
        to={pathname}
        className="options_item"
        activeClassName="options_item--active"
      >
        {this.svg[icon]}
        <div className="options_item__title_block">
          <div className="options_item__title">{title}</div>
          <div className="options_item__info">{info}</div>
        </div>
      </Link>
    );
  }
}

SideBarOptionsItem.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func,
  icon: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  pathname: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(SideBarOptionsItem);
