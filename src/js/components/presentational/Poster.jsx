import React from 'react';
import PropTypes from "prop-types";


const Poster = (props) => {
  return (
    <img 

      src={props.image} 
      alt={props.title} 
      onClick={() => {props.onClickPoster(props.id)}}
      style={{width: "100%", height: "100%", borderRadius: "4px", boxShadow: "0 4px 12px rgba(224,224,224,0.5)", cursor: "pointer"}}
      />
    
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClickPoster: PropTypes.func.isRequired
}

export default Poster;
