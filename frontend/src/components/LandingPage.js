import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../stylesheets/LandingPage.module.scss';

const LandingImage = () => {
  return(
    <div className={styles['landing-container']}>
      <div className={styles['text-container']}>
        <Link to='/matches' className={styles['landing-text']}>
          Overwatch Fantasy League
        </Link>
      </div>
    </div>
  )
}

export default LandingImage;
