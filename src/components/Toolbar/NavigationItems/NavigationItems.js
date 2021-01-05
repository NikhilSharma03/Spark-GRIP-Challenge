import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './../NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  // const isAuth = !!useSelector(state => state.auth.token)

  return (
    <ul
      style={{ display: props.block && 'block', textAlign: 'center' }}
      className={styles.UList}
    >
      <NavigationItem href="/" exact={true}>
        Home
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
