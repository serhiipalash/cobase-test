import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { init, showSidebar, hideSidebar } from '../../../actions/appActions';
import { loggedin } from '../../../actions/userActions';
import { loadAll as usersLoadAll } from '../../../actions/usersActions';

import isRetinaDisplay from '../../../utils/isRetinaDisplay';

import TopBar from '../../organisms/TopBar';
import BottomBar from '../../organisms/BottomBar';

import User from '../../../../../static/img/User4.png';
import User2x from '../../../../../static/img/User4@2x.png';


import './style.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleResize = () => {
      if (window.innerWidth > 767) {
        this.props.dispatch(showSidebar());
      } else {
        this.props.dispatch(hideSidebar());
      }
    };
  }

  componentWillMount() {
    this.props.dispatch(init({
      isRetinaDisplay: isRetinaDisplay(),
    }));

    this.props.dispatch(loggedin({
      image: this.props.data.app.isRetinaDisplay ? User2x : User,
    }));

    this.props.dispatch(usersLoadAll());
    this.props.dispatch(usersLoadAll());

    if (window.innerWidth > 767 && this.props.sidebar) {
      this.props.dispatch(showSidebar());
    } else {
      this.props.dispatch(hideSidebar());
    }

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { main, sidebar, data: { app: { isSidebarVisible } } } = this.props;

    return (
      <div className={`app ${isSidebarVisible ? 'app--sidebar' : ''}`}>
        <TopBar />
        {sidebar}
        <div className={`app__content_wrapper ${isSidebarVisible ? 'app__content_wrapper--sidebar_visible' : ''}`}>
          {main}
        </div>
        <BottomBar />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  main: PropTypes.element.isRequired,
  sidebar: PropTypes.element.isRequired,
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(App);
