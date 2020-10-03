import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../stylesheets/LandingPage.module.scss';

const LandingImage = () => {
  return(
    <React.Fragment>
      <div className={styles['landing-container']}>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/hero-select-portrait.png' alt='bastion' />
        </div>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/ana/hero-select-portrait.png' alt='ana' />
        </div>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/hero-select-portrait.png' alt='junkrat' />
        </div>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/hero-select-portrait.png' alt='mccree' />
        </div>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/hero-select-portrait.png' alt='widow' />
        </div>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png' alt='pharah' />
        </div>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/winston/hero-select-portrait.png' alt='winston' />
        </div>
        <div className={styles['hero-portrait-container']}>
          <img src='https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/hero-select-portrait.png' alt='zenyatta' />
        </div>
      </div>
      <div className={styles['text-container']}>
        <Link to='/matches' className={styles['landing-text']}>
          Overwatch Fantasy League
        </Link>
      </div>
    </React.Fragment>
  )
}

export default LandingImage;
