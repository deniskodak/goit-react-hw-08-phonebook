import React from 'react';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import { authSelectors } from '../../redux/auth';

import styles from './AppBar.module.scss';
import { connect } from 'react-redux';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Navigation />
      {!isAuthenticated ? <AuthNav /> : <UserMenu />}
    </div>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
