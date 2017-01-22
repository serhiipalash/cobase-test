import React, { Component } from 'react';

import './style.scss';


class ProgressBar extends Component {
  render() {
    const { title, progress=0, color='purple' } = this.props;

    return (
      <div className="progress_bar">
        <div className="progress_bar__title">{ title }</div>
        <div className="progress_bar__content">
          <div className={`progress_bar__line progress_bar__line--${color}`}>
            <div className={`progress_bar__progress_line progress_bar__progress_line--${color}`} style={{ width: progress*100+'%' }} />
          </div>
          <div className="progress_bar__progress">{progress*100}%</div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
