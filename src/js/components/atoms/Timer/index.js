import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.createdAt = Date.now();
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatDiffDate(startDate, endDate=Date.now()) {
    let start = moment(startDate);
    let end = moment(endDate);
    let duration = moment.duration(end.diff(start));
    let days = duration.days();
    let hours = duration.hours();
    let minutes = duration.minutes();
    if (!days && !hours && !minutes) {
      minutes = 1;
    }
    return `${days ? days+'d ' : ''}${hours ? hours+'h ' : ''}${minutes ? minutes+'m' : ''} ago`;
  }

  render() {
    const { startTime=Date.now() } = this.props;

    return (
      <span>{this.formatDiffDate(startTime)}</span>
    );
  }
}

Timer.propTypes = {
  startTime: PropTypes.number,
};

export default Timer;
