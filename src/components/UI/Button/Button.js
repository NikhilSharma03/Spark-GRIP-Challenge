import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
  <button
    type={props.type || 'button'}
    onClick={props.onClick}
    style={{ color: props.color, background: props.bgColor, ...props.style }}
    className={styles.Button}
  >
    {props.children}
  </button>
);

export default Button;
