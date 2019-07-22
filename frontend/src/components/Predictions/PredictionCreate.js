import React from 'react';
import {connect} from 'react-redux';
import {fetchMatch, createPrediction} from '../../actions/PredictionsActions';
import PredictionForm from './PredictionForm';

class PredictionCreate extends React.Component {
  componentDidMount(){
    this.props.fetchMatch(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.createPrediction({formValues, 'matchId': this.props.match.params.id});
  }
  render(){
    if(!this.props.competition){
      return <div>Loading...</div>;
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
