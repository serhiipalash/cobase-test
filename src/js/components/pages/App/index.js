import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { init } from '../../../actions/appActions';
import { loggedin } from '../../../actions/userActions';
import { loadAll as usersLoadAll } from '../../../actions/usersActions';

import isRetinaDisplay from '../../../utils/isRetinaDisplay';

import TopBar from '../../organisms/TopBar';
import BottomBar from '../../organisms/BottomBar';

import User from '../../../../../static/img/User4.png';
import User2x from '../../../../../static/img/User4@2x.png';


import './style.scss';


class App extends Component {
  componentWillMount() {
    this.props.dispatch(init({
      isRetinaDisplay: isRetinaDisplay(),
    }));

    this.props.dispatch(loggedin({
      image: this.props.data.app.isRetinaDisplay ? User2x : User,
    }));

    this.props.dispatch(usersLoadAll());
  }

  render() {
    const { main, sidebar } = this.props;

    return (
      <div className={`app ${sidebar ? ' app--sidebar' : ''}`}>
        <TopBar isSidebarVisible={!!sidebar}/>
        {sidebar}
        <div className="app__content_wrapper">
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
