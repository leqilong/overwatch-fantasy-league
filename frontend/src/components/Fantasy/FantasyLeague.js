import React from 'react';
import { connect } from 'react-redux';
import {fetchPlayers, fetchPlayersStats} from '../../actions/FantasyLeagueActions';
import PlayerCard from './PlayerCard';
import styles from '../../stylesheets/FantasyLeague.module.scss';

class FantasyLeague extends React.Component{

  componentDidMount(){
    this.props.fetchPlayers();
    this.props.fetchPlayersStats();
  }

  renderPlayersList(){
    const stats = this.props.stats;
    return this.props.players.map(function(player){
      if(stats[player.id]){
        return(
          <PlayerCard
            player={player}
            stats={stats[player.id]}
          />
        )
      }
    });
  }

  render(){
    return(
      <div className={styles['players-container']}>
        {this.renderPlayersList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    stats: state.stats
  };
}

export default connect(mapStateToProps, {fetchPlayers, fetchPlayersStats})(FantasyLeague);
