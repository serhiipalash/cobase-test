import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'antd';

import './style.scss';

import { playSound } from '../../../utils/AudioPlayer';
import smallFootprint from '../../../../../static/audio/small-footprint.ogg';

class ChecklistItem extends Component {
  itemClicked() {
    playSound({ url: smallFootprint });
  }

  render() {
    const { text, done, onChange } = this.props;

    return (
      <div className="checklist_item">
        <Checkbox checked={done} onChange={onChange} onClick={this.itemClicked.bind(this)}>
          <span className={`checklist_item__label ${done ? 'checklist_item__label--crossed' : ''}`}>{text}</span>
        </Checkbox>
      </div>
    );
  }
}

ChecklistItem.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
  done: PropTypes.bool,
};

export default ChecklistItem;
