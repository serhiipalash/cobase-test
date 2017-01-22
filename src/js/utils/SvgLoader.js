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
      more_button: 'more_button.svg',
      search_button: 'search_button.svg',
      globe_button: 'globe_button.svg',
      settings_button: 'settings_button.svg',
    };

    /* eslint-disable */
    Object.keys(this._svg).forEach((item) => {
      this._svg[item] = (<i className="svg-icon-wr" dangerouslySetInnerHTML={{__html: require('../../../static/svg/' + this._svg[item])}} />);
    });
    /* eslint-enable */
  }

  get svg() {
    return this._svg;
  }
}

export default new SvgLoader().svg;
