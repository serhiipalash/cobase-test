import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'antd';

import './style.scss';


class ChecklistItem extends Component {
  render() {
    const { text, done, onChange } = this.props;

    return (
      <div className="checklist_item">
        <Checkbox checked={done} onChange={onChange}>
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
