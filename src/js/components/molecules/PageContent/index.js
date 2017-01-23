import React, { PropTypes } from 'react';

import './style.scss';

const PageContent = ({ children }) =>
  <div className="page_content">
    {children}
  </div>;

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
