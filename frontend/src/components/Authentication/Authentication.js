import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutUser} from '../../actions/AuthActions';
import styles from '../../stylesheets/Header.module.scss';

class Authentication extends React.Component{

  onLogoutClick = () => {
    this.props.logoutUser();
  }

  render(){
    const userNotLoggedIn = (
      <div className='header-item'>
        <Link to='/login' className={styles['header-item']}>
          Log In
        </Link>
      </div>
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
      <div>
        {this.props.loggedIn ? userLoggedIn : userNotLoggedIn}
      </div>
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
