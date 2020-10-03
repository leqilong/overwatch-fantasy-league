import React from 'react';
import { connect } from 'react-redux';
import SelectedPlayerForm from './SelectedPlayerForm';
import styles from'../../../stylesheets/RosterForm.module.scss';
import cx from 'classnames';
import { getCurrentlyDraftedTankPlayers, getCurrentlyDraftedDamagePlayers, getCurrentlyDraftedSupportPlayers } from '../../../selectors/playersSelectors';

class RosterForm extends React.Component{

  renderRoleList = (draftedRole, roleName) => {
    return draftedRole.length === 0 ? (
      <React.Fragment>
        {[1, 2].map( i => <SelectedPlayerForm key={i} player={roleName} />)}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {draftedRole.map(player => <SelectedPlayerForm key={player.id} player={player} handleUndraft={this.handleUndraft} />)}
        {draftedRole.length === 1 ? <SelectedPlayerForm player={roleName} /> : ''}
      </React.Fragment>
    )
  }

  handleUndraft = player => {
    this.props.handleRemoveButtonClick(player);
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
          {[[this.props.draftedTanks, 'Tank'], [this.props.draftedDamage, 'Damanage'], [this.props.draftedSupport, 'Support']].map(draftedRole => {
            return (
              <div key={draftedRole[1]}>
                <ul>
                  {this.renderRoleList(draftedRole[0], draftedRole[1])}
                </ul>
              </div>)
          })}
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
