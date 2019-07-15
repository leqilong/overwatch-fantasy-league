import React from 'react';
import {Link} from 'react-router-dom';
import Rules from './Rules';
import LeaderBoard from './LeaderBoard';
import Authentication from './Authentication';

const Header = () => {
  return(
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Overwatch Fantasy League
      </Link>
      <div className="right menu">
        <Link to="/pastPredictions" className="item">
          Past Predictions
        </Link>
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
};

export default Header;
