import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import List from './List';
import {fetchMatches, fetchPredictions} from '../../actions/PredictionsActions';
import _ from 'lodash';

class MatchesList extends React.Component{

  componentDidMount(){
    this.props.fetchPredictions();
    this.props.fetchMatches();
  }

  renderButtonIfNotLoggedIn = () => {
    if(!this.props.isLoggedIn){
      return(
        <Link to="/login" className="ui button primary">
          Log in to start making predictions!
        </Link>
      )
    }
  }

  render(){
    if(_.isEmpty(this.props.matches)){
      return(
        <div>
          Loading...
        </div>
      )
    }
    return(
      <div>
        {this.renderButtonIfNotLoggedIn()}
        <List
          matchesData={this.props.matches.filter( match => match['competitors'][0] != null)}
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
