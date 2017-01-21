import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import sound from '../../../../../static/audio/trembling.ogg';

import image from '../../../../../static/img/1@2x.png';

import './style.scss';


class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      let audio = new Audio(sound);
      audio.volume = 1;
      audio.play();
    }, 1000);
  }

  render() {
    return (
      <div className="home">
        <h1>Home Page</h1>
        <img src={image} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Home);
