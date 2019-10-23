import React, {Component} from 'react';
import { connect } from "react-redux";
import Search from '../../presentational/Search.jsx';
import PosterContainer from "../PosterContainer/PosterContainer.jsx";
import {discoverMovies} from "../../../utilities/request";
import {POSTER_W342_URL} from "../../../constants/themoviedbApi";
import Poster from '../../presentational/Poster.jsx';

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    token: state.user.token ? state.user.token.token : null
  }
};


class DashboardMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posters: []
    }

    this.onClickPoster = this.onClickPoster.bind(this);
  }

  onClickPoster(mdb_id) {
    console.log("click", mdb_id);
  }

  async componentDidMount() {
    let movies = await discoverMovies();
    
    let posters = movies.results.map((movie) => {
      return {
        id: movie.id, description: movie.overview, 
        title: movie.title, image: `${POSTER_W342_URL}${movie.poster_path}`
      }
    });

    this.setState({
      posters: posters
    })
  }

  render() {
    return (
      <div className="row">
        <Search handleChange={(value) => {console.log(value)}}/>  
        <PosterContainer >
          {
            
            this.state.posters.map(poster => {
              return <div className="col col-md-3" key={poster.id}>
                <Poster 
                    title={poster.title} 
                    id={poster.id} 
                    description={poster.description}
                    image={poster.image}
                    onClickPoster={this.onClickPoster}
                    />
              </div>
            })
            
          }
        </PosterContainer>
      </div> 
    );
  }
}

const Dashboard = connect(mapStateToProps, null)(DashboardMain);
export default Dashboard;