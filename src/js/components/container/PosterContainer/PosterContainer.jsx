import React from 'react';

import PropTypes from 'prop-types';


const PosterContainer = (props) => {
  
  return(
    <div className="col col-md-12">
      <div className="row">
      {
        props.children
      }
      </div>
    </div>
  )
}

PosterContainer.propsTypes = {
  posters: PropTypes.array.isRequired
}

export default PosterContainer;