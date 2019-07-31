import React from 'react';
import {connect} from 'react-redux';
import {fetchLeaders} from '../../actions/PredictionsActions';

class LeaderBoard extends React.Component{
  componentDidMount(){
    this.props.fetchLeaders();
  }
  render(){
    return(
      <div>'I am LeaderBoard!'</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchLeaders})(LeaderBoard);
