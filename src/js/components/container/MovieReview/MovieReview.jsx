import React, {Component} from 'react';
import { connect } from "react-redux";
import {getMovieInfo} from '../../../utilities/request';
import {POSTER_W1280_URL, POSTER_W342_URL} from '../../../constants/themoviedbApi';

class MovieReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    };
  }
  
  async componentDidMount() {
    let movieInfo = null;
    if(this.props.mdbId) {
      movieInfo = await getMovieInfo(this.props.mdbId);
    }

    this.setState({info: movieInfo});
  
  }

  render() {
    return(
      
      <div className="row">
        {
          this.state.info ? <div className="col-sm-12" style={{
              backgroundImage: `url("${POSTER_W1280_URL}${this.state.info.backdrop_path}")`,
              backgroundRepeat: "round no-repeat",
              height: "720px",
              display: "flex",
              alignItems: "center"
            }}>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-2"> 
                <img src={`${POSTER_W342_URL}${this.state.info.poster_path}`} style={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
                }}/>
              </div>
              <div className="col-sm-4" style={{
                color: "yellow", 
                fontSize: "1.1rem", 
                maxHeight: "400px", overflowY: "auto",
                backgroundColor: "rgba(4,4,4, 0.4)",
                padding: "20px"
                }} >
                <p>
                  {
                    this.state.info.overview
                  }
                </p>
              </div>    
            </div>  
          </div> : null
        }
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    mdbId: state.ui.mdbId ? state.ui.mdbId : sessionStorage.getItem("mdbId")
  }
};

const MovieReview = connect(mapStateToProps, null)(MovieReviewContainer);

export default MovieReview;