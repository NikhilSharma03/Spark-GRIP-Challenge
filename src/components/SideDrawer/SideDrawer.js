import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SideDrawer.module.css';
import Backdrop from './../UI/Backdrop/Backdrop';
import NavigationItems from './../Toolbar/NavigationItems/NavigationItems';

const SideDrawer = (props) => {
  // const isAuth = !!useSelector(state => state.auth.token)

  const data = (
    <React.Fragment>
      <Backdrop show={props.display} onClick={props.closeSD} />
      <aside
        onClick={props.closeSD}
        className={styles.SideDrawer}
        style={{
          transform: props.display ? 'translateX(0)' : 'translateX(-100vh)',
          opacity: props.display ? '1' : '0',
        }}
      >
        <NavigationItems block />
      </aside>
    </React.Fragment>
  );
  return ReactDOM.createPortal(data, document.getElementById('sd'));
};

export default SideDrawer;
