import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import Layout from '../../molecules/Layout';
import PageHeader from '../../molecules/PageHeader';


class Drawings extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Drawings | CoBase" />
        <PageHeader>
          Drawings Page
        </PageHeader>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Drawings);
