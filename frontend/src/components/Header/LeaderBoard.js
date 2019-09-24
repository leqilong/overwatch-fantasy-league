import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import {connect} from 'react-redux';
import {fetchLeaders} from '../../actions/PredictionsActions';
import styles from '../../stylesheets/LeaderBoard.module.scss';
import _ from 'lodash';

class LeaderBoard extends React.Component{
  componentDidMount(){
    this.props.fetchLeaders();
  }
  renderLeaders(){
    return this.props.users.map(user => {
      return(
        <div className={styles['row']} key={user.username}>
          <div className={styles['content']}>
            <div className={styles['item']}>
              {user.username}
            </div>
            <div className={styles['item']}>
              {user.score}
            </div>
          </div>
        </div>
      )
    })
  }
  render(){
    if(_.isEmpty(this.props.users)){
      return(
        <LoadingSpinner />
      )
    }
    return(
      <div>{this.renderLeaders()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: Object.values(state.users)
  }
}

export default connect(mapStateToProps, {fetchLeaders})(LeaderBoard);
