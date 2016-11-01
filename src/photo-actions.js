import React from 'react';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CheckIcon from 'material-ui/svg-icons/action/done';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import styles from './index.css';

class PhotoActions extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={styles.photoActions}>
        <IconButton>
          <FloatingActionButton mini={true}>
            <DeleteIcon />
          </FloatingActionButton>
        </IconButton>
        <IconButton>
          <FloatingActionButton mini={true}>
            <CheckIcon />
          </FloatingActionButton>
        </IconButton>
      </div>
    );
  }

}

export default PhotoActions;
