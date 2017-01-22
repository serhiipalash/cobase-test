/**
 * SVG loader
 */
import React from 'react';

class SvgLoader {
  constructor() {
    this._svg = {
      white_logo: 'white_logo.svg',
      overview: 'overview.svg',
      green_task: 'green_task.svg',
      drawings: 'drawings.svg',
      employees: 'employees.svg',
      reports: 'reports.svg',
    };

    Object.keys(this._svg).forEach((item) => {
      this._svg[item] = (<i className="svg-icon-wr" dangerouslySetInnerHTML={{__html: require('../../../static/svg/' + this._svg[item])}} />);
    });
  }

  get svg() {
    return this._svg;
  }
}

export default new SvgLoader().svg;
