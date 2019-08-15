import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Authentication from '../Authentication/Authentication';
import styles from '../../stylesheets/Header.module.scss';

class Header extends React.Component {
  renderPastPredictions = () => {
    if(this.props.loggedIn){
      return(
        <Link to="/pastPredictions" className={styles['header-item']}>
          Past Predictions
        </Link>
      )
    }
  }
  render(){
    return(
      <div className={styles.header}>
        <div className='ui secondary pointing menu'>
          <Link to='/matches' className={styles['header-item']}>
            Overwatch Fantasy League
          </Link>
          <div className='right menu'>
            {this.renderPastPredictions()}
            <Link to='/rules' className={styles['header-item']}>
              Rules
            </Link>
            <Link to='/leaderboard' className={styles['header-item']}>
              LeaderBoard
            </Link>
            <Authentication />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return{
    loggedIn: state.auth.isLoggedIn,
  }
}

export default connect(mapStateToProps)(Header);
