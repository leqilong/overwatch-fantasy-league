import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import List from './List';
import {fetchMatches, fetchPredictions} from '../../actions/PredictionsActions';
import _ from 'lodash';
import './MatchesList.scss'

class MatchesList extends React.Component{

  componentDidMount(){
    this.props.fetchPredictions();
    this.props.fetchMatches();
  }

  renderButtonIfNotLoggedIn = () => {
    if(!this.props.isLoggedIn){
      return(
        <Link to="/login" className="ui button primary">
          Log in to start making preditions!
        </Link>
      )
    }
  }

  render(){
    return(
      <div>
        {this.renderButtonIfNotLoggedIn()}
        <List
          matchesData={this.props.matches}
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
