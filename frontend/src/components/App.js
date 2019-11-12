import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from './Header/Header';
import LandingPage from './LandingPage';
import Rules from './Header/Rules';
import LeaderBoard from './Header/LeaderBoard';
import MatchesList from './Predictions/MatchesList';
import FantasyLeague from './Fantasy/FantasyLeague';
import PredictionCreate from './Predictions/PredictionCreate';
import PastPredictions from './Predictions/PastPredictions';
import PredictionEdit from './Predictions/PredictionEdit';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import history from '../history';
import styles from '../stylesheets/LandingPage.module.scss';
import cx from 'classnames';

const App = () =>{
  return(
    <Router history={history}>
    <Route path="/" exact component={LandingPage} />
    <div className = {cx('ui', 'container', styles['container'])}>
      <Header />
      <Switch>
        <Route path="/matches" exact component={MatchesList} />
        <Route path="/fantasy" exact component={FantasyLeague} />
        <Route path="/rules" exact component={Rules} />
        <Route path="/leaderboard" exact component={LeaderBoard} />
        <Route path="/pastPredictions" exact component={PastPredictions} />
        <Route path="/matches/predict/:id" exact component={PredictionCreate} />
        <Route path="/matches/predict/:id/edit" exact component={PredictionEdit} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </div>
    </Router>

  );
};

export default App;
