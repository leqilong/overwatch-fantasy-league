import React from 'react';
import {connect} from 'react-redux';
import {createPrediction} from '../../actions';
import PredictionForm from './PredictionForm';

class PredictionCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createPrediction(formValues);
  }

  render(){
    return(
      <div>
        <PredictionForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default connect(null, {createPrediction})(PredictionCreate);
