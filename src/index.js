import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import PhotoGallery from 'photo-gallery';

let photos = _.map (_.range (20), function (num) {
  return {
    path: 'http://loremflickr.com/640/480?random=' + num
  };
});

render(
  <h1>Photo Gallery</h1>,
  document.getElementById('root')
);

render(
  <PhotoGallery photos={photos} editable={true}/>,
  document.getElementById('gallery')
);
