import React from 'react';
import styles from '../../stylesheets/PlayerCard.module.scss';
import { roleIcons } from './RoleIcons';

const PlayerCard = (props) => {
  console.log(props.player);
  return (
    <div className='player-container' key={props.player.id}>
      <div className='headshot-container'>
        <img src={props.player.headshot} alt='player profile picture' />
        <div className='player-name-container'>
          {roleIcons[props.player.attributes.role]}
          <p>{props.player.name}</p>
        </div>
      </div>
      <div className='stats-container'>
        <ul>
          <li>Elims: {props.stats.eliminations_avg_per_10m}</li>
          <li>Final Blows: {props.stats.final_blows_avg_per_10m}</li>
          <li>Healing: {props.stats.healing_avg_per_10m}</li>
          <li>Hero Damage: {props.stats.hero_damage_avg_per_10m}</li>
          <li>Death: {props.stats.deaths_avg_per_10m}</li>
        </ul>
      </div>
    </div>
  )
}

export default PlayerCard;
