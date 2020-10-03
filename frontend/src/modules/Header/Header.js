import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Authentication from '../Authentication/components/Authentication.js';
import styles from '../../stylesheets/Header.module.scss';

class Header extends React.Component {

  activeLinkColor = () => {
    return '#77AAAD';
  }

  renderPastPredictions = () => {
    if(this.props.loggedIn){
      return(
        <NavLink
          to="/pastPredictions"
          className={styles['header-item']}
          activeStyle={{
            color: `${this.activeLinkColor()}`
          }}
        >
          Past Predictions
        </NavLink>
      )
    }
  }

  render(){
    return(
      <div className={styles['header']}>
        <div className='ui secondary menu'>
          <NavLink
            to='/matches'
            className={styles['header-item']}
            activeStyle={{
              color: `${this.activeLinkColor()}`
            }}
          >
            Overwatch Fantasy League
          </NavLink>
          <div className='right menu'>
            <NavLink
              to='/fantasy'
              className={styles['header-item']}
              activeStyle={{
                color: `${this.activeLinkColor()}`
              }}
            >
              Fantasy
            </NavLink>
            {this.renderPastPredictions()}
            <NavLink
              to='/rules'
              className={styles['header-item']}
              activeStyle={{
                color: `${this.activeLinkColor()}`
              }}
            >
              Rules
            </NavLink>
            <NavLink
              to='/leaderboard'
              className={styles['header-item']}
              activeStyle={{
                color: `${this.activeLinkColor()}`
              }}
            >
              LeaderBoard
            </NavLink>
            <Authentication activeLinkColor={this.activeLinkColor()} />
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
