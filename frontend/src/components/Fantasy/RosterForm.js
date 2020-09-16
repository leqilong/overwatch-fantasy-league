import React from 'react';
import { connect } from 'react-redux';
import TankForm from './TankForm';
import DamageForm from './DamageForm';
import SupportForm from './SupportForm';
import styles from'../../stylesheets/RosterForm.module.scss';
import cx from 'classnames';
import { getCurrentlyDraftedTankPlayers, getCurrentlyDraftedDamagePlayers, getCurrentlyDraftedSupportPlayers } from '../../selectors/playersSelectors';

class RosterForm extends React.Component{
  renderTankRosterList = () => {
    const tankPlayers = this.props.draft.filter(player => player.role === 'tank').slice(-2); //get the most recently picked 2 players per role
    return tankPlayers.length === 0 ? (
      <React.Fragment>
        {[1, 2].map(i => <TankForm key={i} player='Tank' />)}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {tankPlayers.map(player => <TankForm key={player.id} player={player.name} /> )}
        {tankPlayers.length === 1 ? <TankForm player='Tank' /> : ''}
      </React.Fragment>
    )
  }

  renderDamageRosterList = () => {
    const damagePlayers = this.props.draft.filter(player => player.role === 'offense').slice(-2); //get the most recently picked 2 players per role
    return damagePlayers.length === 0 ? (
      <React.Fragment>
        {[1, 2].map(i => <DamageForm key={i} player='Damage' />)}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {damagePlayers.map(player => <DamageForm key={player.id} player={player.name} />)}
        {damagePlayers.length === 1 ? <DamageForm player='Damage' /> : ''}
      </React.Fragment>
    )
  }

  renderSupportRosterList = () => {
    const supportPlayers = this.props.draft.filter(player => player.role === 'support').slice(-2); //get the most recently picked 2 players per role
    return supportPlayers.length === 0 ? (
      <React.Fragment>
        {[1, 2].map(i => <SupportForm key={i} player='Support' />)}
      </React.Fragment>
    ) : (
      <React.Fragment>
       {supportPlayers.map(player => <SupportForm key={player.id} player={player.name} />)}
       {supportPlayers.length === 1 ? <SupportForm player='Support' /> : ''}
      </React.Fragment>
     )
  }

  handleButtonClick = () => {
    this.props.handleSaveButtonClick(
      {
        players: [
          this.props.draftedTanks[0] ? this.props.draftedTanks[0] : undefined,
          this.props.draftedTanks[1] ? this.props.draftedTanks[1] : undefined,
          this.props.draftedDamage[0] ? this.props.draftedDamage[0] : undefined,
          this.props.draftedDamage[1] ? this.props.draftedDamage[1] : undefined,
          this.props.draftedSupport[0] ? this.props.draftedSupport[0] : undefined,
          this.props.draftedSupport[1] ? this.props.draftedSupport[1] : undefined
        ]
      });
  }

  render(){
    return(
      <div className={styles['roster-form-container']}>
        <div className={styles['header']}>
          Your Lineup
        </div>
        <div className={styles['selection-container']}>
          <div className={styles['tank-container']}>
            <ul>
              {this.renderTankRosterList()}
            </ul>
          </div>
          <div className={styles['damage-container']}>
            <ul>
              {this.renderDamageRosterList()}
            </ul>
          </div>
          <div className={styles['support-container']}>
            <ul>
              {this.renderSupportRosterList()}
            </ul>
          </div>
        </div>
        <button 
          className={cx(styles['btn'], `${this.props.savedState.isSuccessfullySaved ? styles['checked'] : ''}`)}
          onClick={this.handleButtonClick}
        >
          {this.props.savedState.isSuccessfullySaved ? String.fromCharCode('10003') : 'Save'}
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    draftedTanks: getCurrentlyDraftedTankPlayers(state),
    draftedDamage: getCurrentlyDraftedDamagePlayers(state),
    draftedSupport: getCurrentlyDraftedSupportPlayers(state),
    savedState: state.draftSaved
  };
}

export default connect(mapStateToProps)(RosterForm);

//export default RosterForm;
