import React from 'react';
import styles from '../stylesheets/LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return(
    <div className={styles['loading-spinner']}>Loading...</div>
  )
};

export default LoadingSpinner;
