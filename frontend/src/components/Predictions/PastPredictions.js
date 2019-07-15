import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPredictions} from '../../actions';

class PastPredictions extends React.Component {
  componentDidMount(){
    this.props.fetchPredictions();
  }
  render(){
    return(
      <div>{this.props.predictions}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    predictions: Object.values(state.predictions)
  }
}
export default connect(mapStateToProps, {fetchPredictions})(PastPredictions);
