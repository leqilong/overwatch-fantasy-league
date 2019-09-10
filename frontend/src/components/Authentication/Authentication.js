import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logoutUser} from '../../actions/AuthActions';
import styles from '../../stylesheets/Header.module.scss';
import { DropdownMenuIcon } from '../Header/DropdownMenuIcon';
import cx from 'classnames';

class Authentication extends React.Component{

  state = {
    dropdownMenuOpen:false
  };

  onLogoutClick = () => {
    this.props.logoutUser();
    this.setState(previousState => ({
      dropdownMenuOpen: !previousState.dropdownMenuOpen
    }));
  }

  toggleDropdownMenu = () => {
    this.setState(previousState => ({
      dropdownMenuOpen: !previousState.dropdownMenuOpen
    }))
  }

  renderDropdownMenuList = (shouldDisplay) => {
    return(
      <div className={cx(styles['menu-list'],styles[`${shouldDisplay}`])}>
        <ul>
          <li onClick={this.onLogoutClick}>Log out</li>
        </ul>
      </div>
    )
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
      <div>
        <div className={styles['header-item']}>
          <div className={styles['dropdown-menu']}>
            <p>{this.props.username}</p>
            <button className={cx(styles['dropdown-menu-icon'], `${this.state.dropdownMenuOpen ? styles['show'] : ''}`)} onClick={this.toggleDropdownMenu}>
              <DropdownMenuIcon />
            </button>
          </div>
        </div>
        {this.state.dropdownMenuOpen ? this.renderDropdownMenuList('show-menu') : this.renderDropdownMenuList('hide-menu')}
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
