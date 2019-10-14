import React, {Component} from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.user.token
  }
};

class DashboardMain extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row">
        DASHBOARD {this.props.token}
      </div> 
    );
  }
}

const Dashboard = connect(mapStateToProps, null)(DashboardMain);
export default Dashboard;