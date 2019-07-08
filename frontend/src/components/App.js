import React from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';
import Header from './Header/Header';
import Rules from './Header/Rules';
import LeaderBoard from './Header/LeaderBoard';
import MatchesList from './Predictions/MatchesList';

import history from '../history';

const App = () =>{
  return(
    <div className = "ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={MatchesList} />
            <Route path="/rules" exact component={Rules} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
