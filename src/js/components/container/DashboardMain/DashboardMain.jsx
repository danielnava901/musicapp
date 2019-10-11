import React, {Component} from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token
  }
};

class DashboardMain extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    <div className="row">
      DASHBOARD {this.props.token}
    </div> 
  }
}

let Dashboard = connect(mapStateToProps)(DashboardMain);
export default Dashboard;