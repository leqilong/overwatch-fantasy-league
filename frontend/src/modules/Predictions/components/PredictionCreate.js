import React from 'react';
import {connect} from 'react-redux';
import {fetchMatch, createPrediction} from '../PredictionsActions';
import PredictionForm from './PredictionForm';
import LoadingSpinner from '../../LoadingSpinner';

class PredictionCreate extends React.Component {
  componentDidMount(){
    this.props.fetchMatch(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.createPrediction({formValues, 'matchId': this.props.match.params.id, 'matchEndDate': this.props.competition.endDate});
  }
  render(){
    if(!this.props.competition){
      return(
        <LoadingSpinner />
      );
    }
    return(
      <div>
        <PredictionForm
          matchData={this.props.competition}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    competition: state.matches[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchMatch, createPrediction})(PredictionCreate);
