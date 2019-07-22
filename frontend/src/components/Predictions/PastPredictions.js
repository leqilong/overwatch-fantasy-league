import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMatches, fetchPredictions} from '../../actions/PredictionsActions';
import _ from 'lodash';

class PastPredictions extends React.Component {
  componentDidMount(){
    this.props.fetchPredictions();
    this.props.fetchMatches();
  }

  renderButton = (prediction) => {
   return(
     <Link to={`/matches/predict/${prediction.matchId}/edit`} className="ui button primary">Edit Prediction</Link>
    )
  };

  renderPredictionsList(){
    return this.props.predictions.map(prediction =>{
      return(
        <div className="item" key={prediction.matchId}>
          {this.renderButton(prediction)}
          <div className="content">
            <div className="item">
              <p>{this.props.matches[prediction.matchId]['competitors'][0]['name']}</p>
            </div>
            <div className="item">
              <p>{this.props.matches[prediction.matchId]['competitors'][0]['name']}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    if(_.isEmpty(this.props.matches)){
      return <div>Loading...</div>;
    }
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
    return(
      <div className="ui relaxed divided list">
        {this.renderPredictionsList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    predictions: Object.values(state.predictions),
    matches: state.matches
  }
}
export default connect(mapStateToProps, {fetchMatches, fetchPredictions})(PastPredictions);
