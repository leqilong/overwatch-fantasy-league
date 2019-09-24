import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import List from './List';
import LoadingSpinner from '../LoadingSpinner';
import {fetchMatches, fetchPredictions} from '../../actions/PredictionsActions';
import _ from 'lodash';
import styles from '../../stylesheets/MatchesList.module.scss';

class MatchesList extends React.Component{

  componentDidMount(){
    this.props.fetchPredictions();
    this.props.fetchMatches();
  }

  renderNotLoggedIn = () => {
    if(!this.props.isLoggedIn){
      return(
        <div className={styles['login-button']}>
          <p><span><Link to="/login">Log in </Link></span>to start making predictions!</p>
        </div>
      )
    }
  }

  render(){
    if(_.isEmpty(this.props.matches)){
      return(
        <LoadingSpinner />
      )
    }
    return(
      <div className={styles['list-container']}>
        {this.renderNotLoggedIn()}
        <List
          matchesData={this.props.matches.filter( match => match['competitors'][0] != null && match['competitors'][1] != null)}
          isLoggedIn = {this.props.isLoggedIn}
        />
      </div>
    )
  }
}


const mapStateToProps = state => {
  const matchesOrderedByMatchTime = _.orderBy(state.matches, ['startDate']);
  return {
    matches: matchesOrderedByMatchTime,
    predictions: Object.values(state.predictions),
    isLoggedIn: state.auth.isLoggedIn
  }
}
export default connect(mapStateToProps, {fetchMatches, fetchPredictions})(MatchesList);
