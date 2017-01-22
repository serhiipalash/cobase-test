import React, { PropTypes } from 'react';

import './style.scss';

const Layout = ({ children }) =>
  <div className="layout">
    {children}
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
