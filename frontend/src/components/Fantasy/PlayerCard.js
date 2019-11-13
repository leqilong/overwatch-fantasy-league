import React from 'react';
import styles from '../../stylesheets/PlayerCard.module.scss';
import { roleIcons } from './RoleIcons';

const PlayerCard = (props) => {
  console.log(props.stats);
  const renderStats = (stats) => {
    switch(stats.role){
      case 'offense':
        return(
          <ul>
            <li>Elims: {props.stats.eliminations_avg_per_10m.toFixed(0)}</li>
            <li>Final Blows: {props.stats.final_blows_avg_per_10m.toFixed(0)}</li>
            <li>Hero Damage: {props.stats.hero_damage_avg_per_10m.toFixed(0)}</li>
            <li>Deaths: {props.stats.deaths_avg_per_10m.toFixed(0)}</li>
            <li>Healing: {props.stats.healing_avg_per_10m.toFixed(0)}</li>
          </ul>
        )
      case 'tank':
        return(
          <ul>
            <li>Deaths: {props.stats.deaths_avg_per_10m.toFixed(0)}</li>
            <li>Elims: {props.stats.eliminations_avg_per_10m.toFixed(0)}</li>
            <li>Hero Damage: {props.stats.hero_damage_avg_per_10m.toFixed(0)}</li>
            <li>Final Blows: {props.stats.final_blows_avg_per_10m.toFixed(0)}</li>
            <li>Healing: {props.stats.healing_avg_per_10m.toFixed(0)}</li>
          </ul>
         )
      case 'support':
        return(
          <ul>
            <li>Healing: {props.stats.healing_avg_per_10m.toFixed(0)}</li>
            <li>Deaths: {props.stats.deaths_avg_per_10m.toFixed(0)}</li>
            <li>Elims: {props.stats.eliminations_avg_per_10m.toFixed(0)}</li>
            <li>Hero Damage: {props.stats.hero_damage_avg_per_10m.toFixed(0)}</li>
            <li>Final Blows: {props.stats.final_blows_avg_per_10m.toFixed(0)}</li>
          </ul>
        )
      default:
        return;
    }
  }

  return (
    <div className={styles['player-container']} key={props.player.id}>
      <div className={styles['headshot-container']}>
        <img src={props.player.headshot} alt='player profile' />
      </div>
      <div className={styles['icon-container']}>
        {roleIcons[props.player.attributes.role]}
      </div>
      <div className={styles['player-name-container']}>
        <p>{props.player.name}</p>
        <img src={props.player.teams[0].team.icon} alt='team logo' />
      </div>
      <div className={styles['stats-container']}>
        {renderStats(props.stats)}
      </div>
    </div>
  )
}

export default PlayerCard;
