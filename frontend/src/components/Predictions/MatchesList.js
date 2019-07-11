import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMatches} from '../../actions';

const isPredicted = false;

class MatchesList extends React.Component{

  componentDidMount(){
    this.props.fetchMatches();
    console.log(this.props.fetchMatches());
  }

  buttonText = () => {
    return isPredicted === true ? 'Edit Prediction' : 'Make Prediction'
  }

  predictionId = () => {
    return isPredicted === true ? '/1' : ''
  }

  renderAdmin(){
    return (
      <Link to={`/predictions${this.predictionId()}`} className="header">
        <div className="right floated content">
          <button className="ui button primary">{this.buttonText()}</button>
        </div>
      </Link>
    )
  }
s
  renderMatchesList(){
    return this.props.matches.map(match =>{
      return(
        <div className="item">
          {this.renderAdmin()}
          <div className="content">
            <div className="item">
              <p>{match['competitors'][0]['name']}</p>
            </div>
            <div className="item">
              <p>{match['competitors'][1]['name']}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div className="ui relaxed divided list">
        {this.renderMatchesList()}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    matches: Object.values(state.matches)
  }
}
export default connect(mapStateToProps, {fetchMatches})(MatchesList);
