import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logoutUser} from '../../actions/AuthActions';
import styles from '../../stylesheets/Header.module.scss';
import { DropdownMenuIcon } from '../Header/DropdownMenuIcon';

class Authentication extends React.Component{

  state = { dropdownMenuOpen:false };

  onLogoutClick = () => {
    this.props.logoutUser();
  }

  toggleDropdownMenu = () => {
    this.setState(previousState => ({
      dropdownMenuOpen: !previousState.dropdownMenuOpen
    }))
  }

  renderDropdownMenuList = (shouldDisplay) => {
    return(
      <ul className={styles[`${shouldDisplay}`]}>
        <li>log out</li>
      </ul>
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
            {this.props.username}
            <div className={styles['dropdown-menu-icon']} onClick={this.toggleDropdownMenu}>
              <DropdownMenuIcon />
            </div>
          </div>
        </div>
        {this.state.dropdownMenuOpen ? this.renderDropdownMenuList('showMenu') : this.renderDropdownMenuList('hideMenu')}
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
