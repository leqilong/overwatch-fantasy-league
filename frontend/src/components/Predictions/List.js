import React from 'react';
import {Link} from 'react-router-dom';
import './MatchesList.scss'

class List extends React.Component{
  renderButton = (match) => {
    if(this.props.isLoggedIn){
      return(
        match.isPredicted === true ? (<Link to={`/matches/predict/${match.id}/edit`} className="small ui button">Edit Prediction</Link>) :
       (<Link to={`/matches/predict/${match.id}`} className="small ui button">Make Prediction</Link>)
       )
    }
  }

  renderMatchSchedule = (timestamp) => {
    const formatAMPM = (matchStartDateTime) => {
      let hours = matchStartDateTime.getHours();
      let minutes = matchStartDateTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    const matchStartDateTime = new Date(timestamp);
    return matchStartDateTime.toString().split('2019')[0] + formatAMPM(matchStartDateTime);
  }

  renderMatchesList(){
    return this.props.matchesData.map(match =>{
      return(
        <div className="item" key={match.id}>
          <div className="content">
            <div className="teamAContainer">
              <div className="item">
                <p>{match['competitors'][0]['abbreviatedName']}</p>
              </div>
              <div className="item teamALogo">
                <img src={match['competitors'][0]['icon']} alt='team logo' />
              </div>
            </div>
            <div className="item">
              <p>{this.renderMatchSchedule(match['startDate'])}</p>
            </div>
            <div className="teamBContainer">
              <div className="item">
                <p>{match['competitors'][1]['abbreviatedName']}</p>
              </div>
              <div className="item teamBLogo">
                <img src={match['competitors'][1]['icon']} alt='team logo' />
              </div>
            </div>
            {this.renderButton(match)}
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

export default List;
