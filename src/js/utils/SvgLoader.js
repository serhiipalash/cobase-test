/**
 * SVG loader
 */
import React from 'react';

class SvgLoader {
  constructor() {
    this._svg = {
      white_logo: 'white_logo.svg',
      overview: 'overview.svg',
      task_manager: 'task_manager.svg',
      drawings: 'drawings.svg',
      employees: 'employees.svg',
      reports: 'reports.svg',
      more_button: 'more_button.svg',
      search_button: 'search_button.svg',
      globe_button: 'globe_button.svg',
      settings_button: 'settings_button.svg',
      hamburger_menu_button: 'hamburger_menu_button.svg',
      drawings_white: 'drawings_white.svg',
      employees_white: 'employees_white.svg',
      task_manager_blue: 'task_manager_blue.svg',
      calendar_white: 'calendar_white.svg',
      edit_white: 'edit_white.svg',
      plus_button: 'plus_button.svg',
      small_arrow_right: 'small_arrow_right.svg',
      small_arrow_left: 'small_arrow_left.svg',
      pause: 'pause.svg',
      reassign: 'reassign.svg',
      edit_gray: 'edit_gray.svg',
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
