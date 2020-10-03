import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from './modules/Header/Header';
import LandingPage from './modules/LandingPage';
import Rules from './modules/Header/Rules';
import LeaderBoard from './modules/Header/LeaderBoard';
import MatchesList from './modules/Predictions/components/MatchesList';
import FantasyLeague from './modules/Fantasy/components/FantasyLeague';
import PredictionCreate from './modules/Predictions/components/PredictionCreate';
import PastPredictions from './modules/Predictions/components/PastPredictions';
import PredictionEdit from './modules/Predictions/components/PredictionEdit';
import Login from './modules/Authentication/components/Login';
import Register from './modules/Authentication/components/Register';
import history from './history';
import styles from './stylesheets/LandingPage.module.scss';
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
