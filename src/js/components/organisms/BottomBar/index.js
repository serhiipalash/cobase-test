import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import EditButton from '../../atoms/EditButton';
import CalendarButton from '../../atoms/CalendarButton';

import defaultUser from '../../../../../static/img/defaultUser.png';
import defaultUser2x from '../../../../../static/img/defaultUser@2x.png';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  /* eslint-disable */
  editButtonClicked() {
    console.info('EditButton Clicked');
  }

  calendarButtonClicked() {
    console.info('CalendarButton Clicked');
  }
  /* eslint-enable */

  render() {
    return (
      <div className="bottom_bar">
        <div className="bottom_bar__content">
          <Link
            to="/drawings"
            className="bottom_bar__link"
            activeClassName="bottom_bar__link--active"
          >
            {this.svg.drawings_white}
          </Link>
          <Link
            to="/employees"
            className="bottom_bar__link"
            activeClassName="bottom_bar__link--active"
          >
            {this.svg.employees_white}
          </Link>
          <EditButton onClick={this.editButtonClicked.bind(this)} />
          <CalendarButton onClick={this.calendarButtonClicked.bind(this)} />
          <Link
            to="/task-manager"
            className="bottom_bar__link"
            activeClassName="bottom_bar__link--active"
          >
            {this.svg.task_manager_blue}
          </Link>
        </div>
      </div>
    );
  }
}

BottomBar.propTypes = {
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(BottomBar);
