import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import {connect} from 'react-redux';
import {fetchLeaders} from '../../actions/PredictionsActions';
import _ from 'lodash';

class LeaderBoard extends React.Component{
  componentDidMount(){
    this.props.fetchLeaders();
  }
  renderLeaders(){
    return this.props.users.map(user => {
      return(
        <div className="item" key={user.username}>
          <div className="content">
            <div className="item">
              {user.username}
            </div>
            <div className="item">
              {user.score}
            </div>
          </div>
        </div>
      )
    })
  }
  render(){
    if(_.isEmpty(this.props.users)){
      return(
        <LoadingSpinner />
      )
    }
    return(
      <div>{this.renderLeaders()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: Object.values(state.users)
  }
}

export default connect(mapStateToProps, {fetchLeaders})(LeaderBoard);
