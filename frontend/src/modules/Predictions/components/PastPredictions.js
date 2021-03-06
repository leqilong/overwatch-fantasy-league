import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styles from '../../../stylesheets/PastPredictions.module.scss';
import {fetchMatches, fetchPredictions, fetchLeaders} from '../PredictionsActions';
import List from './List';
import ScoreBoard from './ScoreBoard';
import LoadingSpinner from '../../LoadingSpinner';
import _ from 'lodash';


class PastPredictions extends React.Component {
  componentDidMount(){
    this.props.fetchMatches();
    this.props.fetchPredictions();
    this.props.fetchLeaders();
  }
  render(){
    if(_.isEmpty(this.props.predictions)){
      return(
        <div>
          Looks like you don't have any predictions, start making them
          <Link to="/matches">
           here
          </Link>
        </div>
      )
    }
    if(_.isEmpty(this.props.matches)){
      return(
        <LoadingSpinner />
      );
    }
    return(
      <div className={styles['past-predictions']}>
        <List
          matchesData={this.props.matches}
          isLoggedIn={true}
        />
        <ScoreBoard
          user={this.props.currentUser}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  let predictedMatches = [];
  if(!_.isEmpty(state.matches)){
    Object.values(state.predictions).map(prediction => predictedMatches.push(...(state.matches[prediction.matchId] === undefined ? [] : [state.matches[prediction.matchId]])));
  }
  return {
    predictions: Object.values(state.predictions),
    matches: predictedMatches,
    currentUser: state.users[state.auth.username]
  }
}

export default connect(mapStateToProps, {fetchMatches, fetchPredictions, fetchLeaders})(PastPredictions);
