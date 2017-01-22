import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import Layout from '../../molecules/Layout';
import PageHeader from '../../molecules/PageHeader';


class Home extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Home | CoBase" />
        <PageHeader>
          Home Page
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

export default connect(mapStateToProps)(Home);
