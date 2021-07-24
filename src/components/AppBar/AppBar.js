import React from 'react';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';

import styles from './AppBar.module.scss';

const AppBar = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Navigation />
      <AuthNav />
    </div>
  </header>
);

export default AppBar;
