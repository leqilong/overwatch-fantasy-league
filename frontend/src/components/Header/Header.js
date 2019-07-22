import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Authentication from '../Authentication/Authentication';

class Header extends React.Component {
  renderPastPredictions = () => {
    if(this.props.loggedIn){
      return(
        <Link to="/pastPredictions" className="item">
          Past Predictions
        </Link>
      )
    }
  }
  render(){
    return(
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Overwatch Fantasy League
        </Link>
        <div className="right menu">
          {this.renderPastPredictions()}
          <Link to="/rules" className="item">
            Rules
          </Link>
          <Link to="/leaderboard" className="item">
            LeaderBoard
          </Link>
          <Authentication />
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
