import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Transaction.module.css';

const Transaction = () => {
  const td = useSelector((state) => state.transactionDetails);
  console.log(td);

  return (
    <section className={styles.Container}>
      {td.map((item) => (
        <div className={styles.TBox}>
          <h1>Sender : {item.senderEmail}</h1>
          <h1>Receiver : {item.recieverEmail}</h1>
          <h1>Amount : {item.amount}</h1>
        </div>
      ))}
    </section>
  );
};

export default Transaction;
