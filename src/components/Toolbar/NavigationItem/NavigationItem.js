import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';
import { HashLink } from 'react-router-hash-link';

const NavigationItem = (props) => {
  return props.hash ? (
    <li className={styles.List}>
      <HashLink smooth to={'/#' + props.href}>
        {props.children}
      </HashLink>
    </li>
  ) : (
    <li className={styles.List}>
      <NavLink
        activeStyle={{ color: '#d84b65' }}
        to={props.href}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
