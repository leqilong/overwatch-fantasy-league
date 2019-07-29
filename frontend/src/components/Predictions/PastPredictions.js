import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMatches, fetchPredictions} from '../../actions/PredictionsActions';
import List from './List';
import _ from 'lodash';

class PastPredictions extends React.Component {
  componentDidMount(){
    this.props.fetchMatches();
    this.props.fetchPredictions();
  }
  render(){
    if(_.isEmpty(this.props.predictions)){
      return(
        <div>
          Looks like you don't have any predictions, start making them
          <Link to="/">
           here
          </Link>
        </div>
      )
    }
    if(_.isEmpty(this.props.matches)){
      return <div>Loading...</div>;
    }
    return(
      <List
        matchesData={this.props.matches}
        isLoggedIn={true}
      />
    )
  }
}

const mapStateToProps = state => {
  let predictedMatches = [];
  if(!_.isEmpty(state.matches)){
    Object.values(state.predictions).map(prediction=> predictedMatches.push(state.matches[prediction.matchId]));
  }
  return {
    predictions: Object.values(state.predictions),
    matches: predictedMatches
  }
}
export default connect(mapStateToProps, {fetchMatches, fetchPredictions})(PastPredictions);
