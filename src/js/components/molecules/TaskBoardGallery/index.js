import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PlusButton from '../../atoms/PlusButton';

import './style.scss';


class TaskBoardGallery extends Component {
  /* eslint-disable */
  addImage() {
    console.info('addImage PlusButton clicked');
  }

  showImage() {
    console.info('preview image clicked');
  }
  /* eslint-enable */

  render() {
    const { images=[] } = this.props;

    return (
      <div className="task_board_gallery">
        <div className="task_board_gallery__title">
          Gallery
          <PlusButton onClick={this.addImage.bind(this)} />
        </div>
        {images.map((image, index) =>
          <img
            key={index}
            className="task_board_gallery__preview"
            src={image}
            onClick={this.showImage.bind(this)}
          />
        )}
      </div>
    );
  }
}

TaskBoardGallery.propTypes = {
  images: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TaskBoardGallery);
