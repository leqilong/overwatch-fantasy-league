import React from 'react';
import { connect } from 'react-redux';
import {fetchPlayers, fetchPlayersStats, getRoleFilter, draftPlayer} from '../../actions/FantasyLeagueActions';
import PlayerCard from './PlayerCard';
import RosterForm from './RosterForm';
import { roleIcons } from './RoleIcons';
import { getVisiblePlayers } from '../../selectors/playersSelectors';
import styles from '../../stylesheets/FantasyLeague.module.scss';


class FantasyLeague extends React.Component{

  componentDidMount(){
    this.props.fetchPlayers();
    this.props.fetchPlayersStats();
    this.props.getRoleFilter('all');
  }

  handleDraftButtonClick = player => {
    this.props.draftPlayer(player);
  }

  renderPlayersList(){
    const stats = this.props.stats;
    return this.props.players.map(player => {
      if(stats[player.id]){
        return(
          <PlayerCard
            key={player.id}
            player={player}
            stats={stats[player.id]}
            handleDraftButtonClick={this.handleDraftButtonClick}
          />
        )
      }
    });
  }

  render(){
    return(
      <div className={styles['fantasy-league-container']}>
        <div>
          <div className={styles['role-menu-container']}>
            <div className={styles['role-type']} onClick={()=>this.props.getRoleFilter('all')}>All</div>
            <div className={styles['role-type']} onClick={()=>this.props.getRoleFilter('tank')}><span className={styles['role-icon']}>{roleIcons.tank}</span> Tank</div>
            <div className={styles['role-type']} onClick={()=>this.props.getRoleFilter('offense')}><span className={styles['role-icon']}>{roleIcons.offense}</span> Damage</div>
            <div className={styles['role-type']} onClick={()=>this.props.getRoleFilter('support')}><span className={styles['role-icon']}>{roleIcons.support}</span> Support</div>
          </div>
          <div className={styles['players-container']}>
            {this.renderPlayersList()}
          </div>
        </div>
        <RosterForm
          draft={this.props.draft}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: getVisiblePlayers(state),
    stats: state.stats,
    draft: state.draft
  };
}

export default connect(mapStateToProps, {fetchPlayers, fetchPlayersStats, getRoleFilter, draftPlayer})(FantasyLeague);
