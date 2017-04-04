import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PhotoActions from './photo-actions'
import styles from './index.css';

class PhotoGallery extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      photos: this.props.photos
    };

    this.muiStyles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      gridList: {
        width: 500,
        height: 800,
        overflowY: 'auto'
      },
      thumbnailHeight: 180
    };
  }

  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleClick (event) {
    window.open(event.target.src, '_blank');
  }

  render () {
    return (
      <div style={this.muiStyles.root}>
        <GridList
          cellHeight={this.muiStyles.thumbnailHeight}
          style={this.muiStyles.gridList}
        >
          {this.state.photos.map((photo) => {
            return (
              <GridTile
                className={styles.gridTile}
                key={photo.path}
                onClick={this.handleClick}
                title={' '}
                actionIcon={<PhotoActions />}
              >
                <img src={photo.path} />
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  photos: React.PropTypes.array,
  editable: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

PhotoGallery.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default PhotoGallery;
