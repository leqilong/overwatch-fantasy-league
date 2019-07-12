import React from 'react';
import {connect} from 'react-redux';
import {fetchMatch, createPrediction} from '../../actions';
import PredictionForm from './PredictionForm';

class PredictionCreate extends React.Component {
  componentDidMount(){
    console.log(this.props.match)
    this.props.fetchMatch(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.createPrediction(formValues);
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
  console.log(ownProps)
  return {
    competition: state.matches[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchMatch, createPrediction})(PredictionCreate);
