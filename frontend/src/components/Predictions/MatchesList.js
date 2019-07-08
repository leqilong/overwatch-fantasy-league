import React from 'react';
import {List} from 'immutable';


const matches = List.of(
  {competitors: ['New York Excelsior', 'Vancouver Titans']},
  {competitors: ['San Francisco Shock', 'Los Angeles Valiant']})

const isPredicted = false;

class MatchesList extends React.Component{

  buttonText = () => {
    return isPredicted === true ? 'Edit Prediction' : 'Make Prediction'
  }
  
  renderAdmin(){
    return (
      <div className="right floated content">
        <button className="ui button primary">{this.buttonText()}</button>
      </div>
    )
  }

  renderMatchesList(){
    return matches.map(match =>{
      return(
        <div className="item">
          {this.renderAdmin()}
          <div className="content">
            <div className="item">
              <p>{match.competitors[0]}</p>
            </div>
            <div className="item">
              <p>{match.competitors[1]}</p>
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

export default MatchesList;
