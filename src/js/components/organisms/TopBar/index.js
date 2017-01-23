import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { showSidebar, hideSidebar } from '../../../actions/appActions';

import { playSound } from '../../../utils/AudioPlayer';
import gesture from '../../../../../static/audio/gesture.ogg';

import MoreButton from '../../atoms/MoreButton';
import HamburgerMenuButton from '../../atoms/HamburgerMenuButton';
import SearchButton from '../../atoms/SearchButton';
import GlobeButton from '../../atoms/GlobeButton';
import SettingsButton from '../../atoms/SettingsButton';
import UserPicture from '../../atoms/UserPicture';

import defaultUser from '../../../../../static/img/default_user.png';

import './style.scss';


class TopBar extends Component {
  /* eslint-disable */
  moreButtonClicked() {
    console.info('MoreButton Clicked');
  }

  hamburgerMenuButtonClicked() {
    console.info('HamburgerMenuButton Clicked');
    const { app: { isSidebarVisible } } = this.props.data;

    if (isSidebarVisible) {
      this.props.dispatch(hideSidebar());
    } else {
      this.props.dispatch(showSidebar());
    }
    playSound({ url: gesture });
  }

  userPictureClicked() {
    console.info('UserPicture Clicked');
  }

  globeButtonClicked() {
    console.info('GlobeButton Clicked');
  }

  searchButtonClicked() {
    console.info('SearchButton Clicked');
  }

  settingsButtonClicked() {
    console.info('SettingsButton Clicked');
  }
  /* eslint-enable */

  render() {
    const { user, app: { isSidebarVisible } } = this.props.data;

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
          <MoreButton
            onClick={this.moreButtonClicked.bind(this)}
            xsHidden={true}
          />
          <HamburgerMenuButton
            onClick={this.hamburgerMenuButtonClicked.bind(this)}
            xsVisible={true}
          />
        </section>
        <section className="topbar__right_section">
          <SearchButton
            onClick={this.searchButtonClicked.bind(this)}
            xsHidden={true}
          />
          <GlobeButton
            active={true}
            onClick={this.globeButtonClicked.bind(this)}
          />
          <SettingsButton
            onClick={this.settingsButtonClicked.bind(this)}
            xsHidden={true}
          />
          <UserPicture
            image={user ? user.image : defaultUser}
            onClick={this.userPictureClicked.bind(this)}
            xsHidden={true}
          />
        </section>
      </div>
    );
  }
}

TopBar.propTypes = {
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TopBar);
