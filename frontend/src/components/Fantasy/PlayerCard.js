import React, { useState } from 'react';
import styles from '../../stylesheets/PlayerCard.module.scss';
import { roleIcons } from './RoleIcons';

const PlayerCard = (props) => {

  const [portraitHovered, setPortraitHoverState] = useState(false);

  const renderStats = (stats) => {
    switch(stats.role){
      case 'offense':
        return(
          <ul>
            <li>Elims: {props.stats.eliminations_avg_per_10m.toFixed(0)}</li>
            <li>Final Blows: {props.stats.final_blows_avg_per_10m.toFixed(0)}</li>
            <li>Damage: {props.stats.hero_damage_avg_per_10m.toFixed(0)}</li>
            <li>Deaths: {props.stats.deaths_avg_per_10m.toFixed(0)}</li>
            <li>Healing: {props.stats.healing_avg_per_10m.toFixed(0)}</li>
          </ul>
        )
      case 'tank':
        return(
          <ul>
            <li>Deaths: {props.stats.deaths_avg_per_10m.toFixed(0)}</li>
            <li>Elims: {props.stats.eliminations_avg_per_10m.toFixed(0)}</li>
            <li>Damage: {props.stats.hero_damage_avg_per_10m.toFixed(0)}</li>
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
            <li>Damage: {props.stats.hero_damage_avg_per_10m.toFixed(0)}</li>
            <li>Final Blows: {props.stats.final_blows_avg_per_10m.toFixed(0)}</li>
          </ul>
        )
      default:
        return;
    }
  }

  const handleHover = () => setPortraitHoverState(!portraitHovered);
  const handleClick = () => {
    props.handleDraftButtonClick({
      id: props.player.id,
      name: props.player.name,
      role: props.player.attributes.role
    })
  }

  return (
    <div className={styles['player-container']} key={props.player.id}>
      <div
        className={styles['headshot-container']}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img src={props.player.headshot} alt='player profile' />
        <button
          className={`${ portraitHovered ? styles['show-btn'] : styles['hide-btn']}`}
          onClick={handleClick}
        >
          Draft
        </button>
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
