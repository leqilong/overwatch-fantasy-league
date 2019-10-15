import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../stylesheets/LandingPage.module.scss';

const LandingImage = () => {
  return(
    <React.Fragment>
      <div className={styles['landing-container']}></div>
      <div className={styles['text-container']}>
        <Link to='/matches' className={styles['landing-text']}>
          Overwatch Fantasy League
        </Link>
      </div>
    </React.Fragment>
  )
}

export default LandingImage;
