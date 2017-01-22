import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import SideBarOptions from '../../molecules/SideBarOptions';
import ProgressPanel from '../../molecules/ProgressPanel';

import WhiteLogo from '../../../../../static/img/WhiteLogo.png';
import WhiteLogo2x from '../../../../../static/img/WhiteLogo@2x.png';

import './style.scss';


class SideBar extends Component {
  render() {
    const { isRetinaDisplay } = this.props.data.app;

    return (
      <div className="sidebar">
        <header className="sidebar__header">
          <Link to="/">
            <img
              className="sidebar__logo"
              src={isRetinaDisplay ? WhiteLogo2x : WhiteLogo}
            />
          </Link>
        </header>
        <section className="sidebar__content">
          <SideBarOptions />
          <ProgressPanel />
        </section>
        <footer className="sidebar__footer"></footer>
      </div>
    );
  }
}

SideBar.propTypes = {
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(SideBar);
