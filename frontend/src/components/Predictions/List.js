import React from 'react';
import {Link} from 'react-router-dom';
import MatchResult from './MatchResult';
import styles from '../../stylesheets/MatchesList.module.scss'
import cx from 'classnames';

class List extends React.Component{
  renderButton = (match) => {
    const date = new Date();
    const currentTimestamp = date.getTime();
    if(this.props.isLoggedIn){
      return(
        match['startDateTS'] <= currentTimestamp ? (<div className={cx(styles.button, styles.disabled)}>Prediction Closed</div>) : match.isPredicted === true ? (<Link to={`/matches/predict/${match.id}/edit`} className={styles.button}>Edit Prediction</Link>) :
       (<Link to={`/matches/predict/${match.id}`} className={styles.button}>Make Prediction</Link>)
       )
    }
  }

  renderMatchTime = (timestamp) => {
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
    return (
      <div className={styles.matchSchedule}>
        <div className={styles.matchDate}>
          {matchStartDateTime.toString().split('2019')[0]}
        </div>
        <div className={styles.matchTime}>
          {formatAMPM(matchStartDateTime)}
        </div>
      </div>
    )
  }

  renderMatchResult = (match) => {
    if(match.state === 'CONCLUDED'){
      return(
        <MatchResult
          match={match}
        />
      )
    }
  }
  renderMatchesList(){
    return this.props.matchesData.map(match =>{
      return(
        <div className={cx('item', styles['item'])} key={match.id}>
          <div className={cx('content', styles.content)}>
            <div className={styles.teamAContainer}>
              <div className={cx(styles.item, styles.teamName)}>
                <p>{match['competitors'][0]['name']}</p>
              </div>
              <div className={cx(styles.item, styles.teamALogo)}>
                <img src={match['competitors'][0]['icon']} alt='team logo' />
              </div>
            </div>
            <div className={styles.item}>
              {this.renderMatchTime(match['startDate'])}
            </div>
            <div className={styles.teamBContainer}>
              <div className={cx(styles.item, styles.teamName)}>
                <p>{match['competitors'][1]['name']}</p>
              </div>
              <div className={cx(styles.item, styles.teamBLogo)}>
                <img src={match['competitors'][1]['icon']} alt='team logo' />
              </div>
            </div>
            {this.renderButton(match)}
          </div>
          {this.renderMatchResult(match)}
        </div>
      )
    })
  }

  render(){
    return(
      <div className='ui relaxed divided list'>
        {this.renderMatchesList()}
      </div>
    )
  }
}

export default List;
