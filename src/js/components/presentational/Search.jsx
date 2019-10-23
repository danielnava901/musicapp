import React, {Component} from 'react';
import Input from './Input.jsx';
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(ev) {
    this.setState({
      value: ev.target.value
    });

    this.props.handleChange(ev.target.value);
  }

  render() {
    return (
      
      <div className="col col-md-12" style={{backgroundColor: "green", padding: "30px 10px 20px 10px"}}>
        <Input type="text" id="search" value={this.state.value} handleChange={this.onChangeValue}/>
      </div>
      
    );
  }
  
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Search;