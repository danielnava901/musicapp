import React, {Component} from 'react';
import { connect } from "react-redux";
import {getMovieInfo} from '../../../utilities/request';
import {POSTER_W1280_URL, POSTER_W342_URL} from '../../../constants/themoviedbApi';
import ScoreBar from '../../presentational/ScoreBar.jsx';

class MovieReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      showScoreBar: false
    };

    this.onClickScore = this.onClickScore.bind(this);
    this.onClickFav = this.onClickFav.bind(this);
  }
  
  async componentDidMount() {
    let movieInfo = null;
    if(this.props.mdbId) {
      movieInfo = await getMovieInfo(this.props.mdbId);
    }

    this.setState({info: movieInfo});
  }

  async onClickScore(score) {
    console.log(score);
  }

  async onClickFav() {
    console.log("click fav");
  }

  render() {
    const movieInfoStyle = {
      backgroundImage: this.state.info ? `url("${POSTER_W1280_URL}${this.state.info.backdrop_path}")`: "",
      backgroundRepeat: "round no-repeat",
      height: "720px",
      display: "flex",
      alignItems: "center"
    };

    const movieInfoStyle2 = {
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      backgroundColor: "rgba(4,4,4, 0.4)",
      borderRadius: "5px",
      position: "relative"
    };

    const movieInfoStyle3 = {
      color: "yellow", 
      fontSize: "1.1rem", 
      maxHeight: "400px", overflowY: "auto",
      padding: "20px",
      
    };

    return(
      
      <div className="row">
        {
          this.state.info ? <div className="col-sm-12" style={movieInfoStyle}>
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
              
                <div className="row" style={movieInfoStyle2}>
                  {
                    this.state.showScoreBar ? <ScoreBar onClick={this.onClickScore}/> : null
                  }
                  <div className="col-sm-6"> 
                    <img src={`${POSTER_W342_URL}${this.state.info.poster_path}`} style={{height: "100%", borderRadius: "5px 0 0 5px"}}/>
                  </div>
                  <div className="col-sm-6"  style={movieInfoStyle3} >
                    <div className="row">
                      
                      <div className="col-sm-2" onClick={() => {this.setState({showScoreBar: !this.state.showScoreBar})}}>score</div>
                      <div className="col-sm-2" onClick={this.onClickFav}>star</div>
                      
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                          <p>
                            {
                              this.state.info.overview
                            }
                          </p>
                      </div>
                    </div>
                  </div>  
                </div>
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