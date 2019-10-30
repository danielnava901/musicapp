import React from 'react';
import PropTypes from 'prop-types';

const ScoreBar = (props) => {

  return (
    <div className="row">
      <ul className="col-sm-offset-6 col-sm-6"  
        style={{display: "flex",
          listStyle: "none",
          position: "absolute",
          top: "-15px",
          width: "100%",
          justifyContent: "space-around",
          zIndex: "10"
      }}>
        <li onClick={() => {props.onClick(100)}}>joya</li>
        <li onClick={() => {props.onClick(80)}}>manitaup</li>
        <li onClick={() => {props.onClick(60)}}>meh</li>
        <li onClick={() => {props.onClick(40)}}>dinero</li>
        <li onClick={() => {props.onClick(20)}}>manitadow</li>
        <li onClick={() => {props.onClick(0)}}>caca</li>
      </ul>
    </div> 
    
  )
}

ScoreBar.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ScoreBar;