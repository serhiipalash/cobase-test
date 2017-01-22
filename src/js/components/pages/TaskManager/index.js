import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import Layout from '../../molecules/Layout';
import PageHeader from '../../molecules/PageHeader';

import { playSound } from '../../../utils/AudioPlayer.js';
import trembling from '../../../../../static/audio/trembling.ogg';


class TaskManager extends Component {
  componentDidMount() {
    setTimeout(() => playSound({ url: trembling }), 1000);
  }

  render() {
    return (
      <Layout>
        <Helmet title="Task Manager | CoBase" />
        <PageHeader>
          Task Manager
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

export default connect(mapStateToProps)(TaskManager);
