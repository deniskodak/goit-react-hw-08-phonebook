import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <ul className={styles.nav_list}>
    <li className={styles.nav_item}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.link_active}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contacts"
        className={styles.link}
        activeClassName={styles.link_active}
      >
        Contacts
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
