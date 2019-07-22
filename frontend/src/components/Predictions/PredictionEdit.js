import React from 'react';
import {connect} from 'react-redux';
import {fetchPrediction, editPrediction} from '../../actions/PredictionsActions';
import PredictionForm from './PredictionForm';

class PredictionEdit extends React.Component {
  componentDidMount(){
    this.props.fetchPrediction(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.editPrediction(this.props.match.params.id, formValues);
  }
  render(){
    if(!this.props.competition){
      return <div>Loading...</div>;
    }
    console.log('PredictionEdit Component: ');
    console.log(this.props.prediction);

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
  console.log('state: ');
  console.log(state);
  return {
    competition: state.matches[ownProps.match.params.id],
    prediction: state.predictions[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchPrediction, editPrediction})(PredictionEdit);
