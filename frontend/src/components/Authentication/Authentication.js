import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logoutUser} from '../../actions/AuthActions';
import styles from '../../stylesheets/Header.module.scss';

class Authentication extends React.Component{

  onLogoutClick = () => {
    this.props.logoutUser();
  }

  render(){
    const userNotLoggedIn = (
      <NavLink
        to="/login"
        className={styles['header-item']}
        activeStyle={{
          color: this.props.activeLinkColor
        }}
      >
        Log In
      </NavLink>
    )
    const userLoggedIn = (
      <div className={styles['header-item']}>
        {this.props.username}
        <button onClick={this.onLogoutClick}>
          log out
        </button>
      </div>
    )

    return(
      this.props.loggedIn ? userLoggedIn : userNotLoggedIn
    )
  }
}

const mapStateToProps = state => {
  return{
    loggedIn: state.auth.isLoggedIn,
    username: state.auth.username
  }
}

export default connect(mapStateToProps, {logoutUser})(Authentication);
