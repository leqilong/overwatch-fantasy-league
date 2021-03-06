import React from 'react';
import styles from '../../stylesheets/Rules.module.scss';


class Rules extends React.Component{
  render(){
    return(
      <div className={styles['rules-container']}>
        <div>
          <ul>
            <li>You can make and edit predictions until games go live</li>
            <li>You must predict which team will most likely win a series</li>
            <li>You will receive one (1) point for each correctly picked series winner</li>
            <li>Predicting final scores is optional</li>
            <li>You will receive two (2) points for each correctly guessed final score</li>
            <li>You will be deducted one (1) point for each incorrectly guessed final score</li>
            <li>Your total points will be reflected on your own Past Predictions scoreboard and the community Leaderboard</li>
            <li>Match schedules are updated stage by stage</li>
          </ul>
        </div>
        <img src='https://myrealdomain.com/images/overwatch-tracer-png-1.png' alt='tracer' />
      </div>
    )
  }
}

export default Rules;
