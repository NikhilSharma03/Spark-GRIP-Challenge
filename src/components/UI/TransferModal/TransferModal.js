import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './TransferModal.module.css';

const TransferModal = (props) => {
  const [rec, setRec] = useState('');
  const [sen, setSen] = useState('');
  const [amt, setAmt] = useState(0);

  return (
    <section
      className={styles.TransferModal}
      style={{ display: props.show ? 'flex' : 'none' }}
    >
      <div className={styles.Container}>
        <div className={styles.InputContainer}>
          <label>Receiver's </label>
          <input
            value={rec}
            onChange={(event) => {
              setRec(event.target.value);
              props.onChange(event.target.value, 'reciever');
            }}
          />
          <label>@gmail.com</label>
        </div>
        <div className={styles.InputContainer}>
          <label>Sender's </label>
          <input
            value={sen}
            onChange={(event) => {
              setSen(event.target.value);
              props.onChange(event.target.value, 'sender');
            }}
          />
          <label>@gmail.com</label>
        </div>
        <div className={styles.InputContainer}>
          <label>Amount </label>
          <input
            type="number"
            value={amt}
            onChange={(event) => {
              setAmt(event.target.value);
              props.onChange(event.target.value, 'amount');
            }}
          />
        </div>
        <Button
          style={{ width: '97.5%', marginTop: '2rem' }}
          color="white"
          bgColor="#d84b65"
          onClick={() => {
            setRec('');
            setSen('');
            setAmt(0);
            props.onTransfer();
          }}
        >
          Transfer
        </Button>
        <Button
          onClick={props.removeShow}
          style={{ width: '97.5%', marginTop: '2rem' }}
          color="white"
          bgColor="rgb(87, 30, 36)"
        >
          Close
        </Button>
      </div>
    </section>
  );
};

export default TransferModal;
