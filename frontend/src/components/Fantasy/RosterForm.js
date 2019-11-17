import React from 'react';
import TankForm from './TankForm';
import DamageForm from './DamageForm';
import SupportForm from './SupportForm';

class RosterForm extends React.Component{
  renderTankRosterList = () => {
    const tankPlayers = this.props.draft.filter(player => player.role === 'tank');
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
    const damagePlayers = this.props.draft.filter(player => player.role === 'offense');
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
    const supportPlayers = this.props.draft.filter(player => player.role === 'support');
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

  render(){
    return(
      <div>
        <div>
          <p>Your Line-up</p>
        </div>
        <div>
          <div className='tank-container'>
            <ul>
              {this.renderTankRosterList()}
            </ul>
          </div>
          <div className='damage-container'>
            <ul>
              {this.renderDamageRosterList()}
            </ul>
          </div>
          <div className='support-container'>
            <ul>
              {this.renderSupportRosterList()}
            </ul>
          </div>
        </div>
        <button>Save</button>
      </div>
    )
  }
}
export default RosterForm;
