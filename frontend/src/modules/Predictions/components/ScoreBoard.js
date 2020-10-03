import React from 'react';
import styles from '../../../stylesheets/PastPredictions.module.scss';

class ScoreBoard extends React.Component{
  render(){
    return(
      <div className={styles['score-board']}>
        <h2>
          Scores
        </h2>
        <div>
          Your current prediction score is:
        </div>
        <div className={styles['score']}>
          {this.props.user.score}
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default ScoreBoard;
