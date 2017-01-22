import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import MoreButton from '../../atoms/MoreButton';
import SearchButton from '../../atoms/SearchButton';
import GlobeButton from '../../atoms/GlobeButton';
import SettingsButton from '../../atoms/SettingsButton';
import UserPicture from '../../atoms/UserPicture';

import defaultUser from '../../../../../static/img/defaultUser.png';
import defaultUser2x from '../../../../../static/img/defaultUser@2x.png';

import './style.scss';


class TopBar extends Component {
  moreButtonClicked() {
    /* eslint-disable */
    console.info('moreButtonClicked');
    /* eslint-enable */
  }

  userPictureClicked() {
    /* eslint-disable */
    console.info('userPictureClicked');
    /* eslint-enable */
  }

  globeButtonClicked() {
    /* eslint-disable */
    console.info('globeButtonClicked');
    /* eslint-enable */
  }

  searchButtonClicked() {
    /* eslint-disable */
    console.info('searchButtonClicked');
    /* eslint-enable */
  }

  settingsButtonClicked() {
    /* eslint-disable */
    console.info('settingsButtonClicked');
    /* eslint-enable */
  }

  render() {
    const { isSidebarVisible, data: { user, app: { isRetinaDisplay } } } = this.props;

    return (
      <div className={`topbar ${isSidebarVisible ? ' topbar--sidebar_visible' : ''}`}>
        <section className="topbar__left_section">
          <Link
            to="/projects"
            className="topbar__link"
            activeClassName="topbar__link--active"
          >
            Projects
          </Link>
          <Link
            to="/people"
            className="topbar__link"
            activeClassName="topbar__link--active"
          >
            People
          </Link>
          <Link
            to="/team"
            className="topbar__link"
            activeClassName="topbar__link--active"
          >
            Team
          </Link>
          <MoreButton onClick={this.moreButtonClicked.bind(this)} />
        </section>
        <section className="topbar__right_section">
          <SearchButton
            onClick={this.searchButtonClicked.bind(this)}
          />
          <GlobeButton
            active={true}
            onClick={this.globeButtonClicked.bind(this)}
          />
          <SettingsButton
            onClick={this.settingsButtonClicked.bind(this)}
          />
          <UserPicture
            image={user ? user.image : isRetinaDisplay ? defaultUser2x : defaultUser}
            onClick={this.userPictureClicked.bind(this)}
          />
        </section>
      </div>
    );
  }
}

TopBar.propTypes = {
  isSidebarVisible: PropTypes.bool.isRequired,
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TopBar);
