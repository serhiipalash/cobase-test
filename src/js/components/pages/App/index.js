import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { init } from '../../../actions/appActions';
import isRetinaDisplay from '../../../utils/isRetinaDisplay';

import TopBar from '../../organisms/TopBar';

import './style.scss';


class App extends Component {
  componentWillMount() {
    this.props.dispatch(init({
      isRetinaDisplay: isRetinaDisplay(),
    }));
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
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  main: PropTypes.element.isRequired,
  sidebar: PropTypes.element.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(App);
