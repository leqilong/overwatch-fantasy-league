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
  renderMatchesList(){
    return this.props.matches.map(match =>{
      return(
        <div className="item" key={match.id}>
          {this.renderButton(match)}
          <div className="content">
            <div className="team1Container">
              <div className="item">
                <p>{match['competitors'][0]['name']}</p>
              </div>
              <div className="item">
                <img src={match['competitors'][0]['logo']} />
              </div>
            </div>
            <div className="item">
              <p>{match['startDate']}</p>
            </div>
            <div className="team2Container">
              <div className="item">
                <p>{match['competitors'][1]['name']}</p>
              </div>
              <div className="item">
                <img src={match['competitors'][1]['logo']} />
              </div>
            </div>  
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
  return {
    matches: Object.values(state.matches),
    predictions: Object.values(state.predictions),
    isLoggedIn: state.auth.isLoggedIn
  }
}
export default connect(mapStateToProps, {fetchMatches, fetchPredictions})(MatchesList);
