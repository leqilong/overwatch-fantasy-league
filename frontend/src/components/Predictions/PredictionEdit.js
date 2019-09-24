import React from 'react';
import {connect} from 'react-redux';
import {fetchMatches, fetchPrediction, editPrediction} from '../../actions/PredictionsActions';
import PredictionForm from './PredictionForm';
import LoadingSpinner from '../LoadingSpinner';

class PredictionEdit extends React.Component {
  componentDidMount(){
    this.props.fetchMatches();
    this.props.fetchPrediction(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.editPrediction(this.props.match.params.id, formValues);
  }
  render(){
    if(!this.props.competition){
      return (
        <LoadingSpinner />
      );
    }
    return(
      <div>
        <PredictionForm
          matchData={this.props.competition}
          initialValues={this.props.prediction}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    competition: state.matches[ownProps.match.params.id],
    prediction: state.predictions[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchMatches, fetchPrediction, editPrediction})(PredictionEdit);
