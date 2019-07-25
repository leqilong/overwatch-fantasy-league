import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMatches, fetchPredictions} from '../../actions/PredictionsActions';
import './MatchesList.scss'

class MatchesList extends React.Component{

  componentDidMount(){
    this.props.fetchPredictions();
    this.props.fetchMatches();
  }

  renderButton = (match) => {
    if(this.props.isLoggedIn){
      return(
        match.isPredicted === true ? (<Link to={`/matches/predict/${match.id}/edit`} className="ui button primary">Edit Prediction</Link>) :
       (<Link to={`/matches/predict/${match.id}`} className="ui button primary">Make Prediction</Link>)
       )
    }
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
  renderMatchSchedule = (timestamp) => {
    const matchStartDateTime = new Date(timestamp);
    return matchStartDateTime.toString().split(':')[0] + ':' + matchStartDateTime.toString().split(':')[1];
  }

  renderMatchesList(){
    console.log('MatchesList Component:');
    console.log(this.props.matches);
    return this.props.matches.map(match =>{
      return(
        <div className="item" key={match.id}>
          <div className="content">
            <div className="teamContainer">
              <div className="item">
                <p>{match['competitors'][0]['abbreviatedName']}</p>
              </div>
              <div className="item">
                <img src={match['competitors'][0]['icon']} />
              </div>
            </div>
            <div className="item">
              <p>{this.renderMatchSchedule(match['startDate'])}</p>
            </div>
            <div className="teamContainer">
              <div className="item">
                <p>{match['competitors'][1]['abbreviatedName']}</p>
              </div>
              <div className="item">
                <img src={match['competitors'][1]['icon']} />
              </div>
            </div>
            {this.renderButton(match)}
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        {this.renderButtonIfNotLoggedIn()}
        <div className="ui relaxed divided list">
          {this.renderMatchesList()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    matches: Object.values(state.matches),
    predictions: Object.values(state.predictions),
    isLoggedIn: state.auth.isLoggedIn
  }
}
export default connect(mapStateToProps, {fetchMatches, fetchPredictions})(MatchesList);
