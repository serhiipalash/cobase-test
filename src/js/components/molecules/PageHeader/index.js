import React, { PropTypes } from 'react';

import './style.scss';

const PageHeader = ({ children }) =>
  <div className="page_header">
    {children}
  </div>;

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
