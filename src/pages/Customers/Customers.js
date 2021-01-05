import React, { useState } from 'react';
import styles from './Customers.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from './../../components/UI/Button/Button';
import TransferModal from './../../components/UI/TransferModal/TransferModal';

const addMoney = (details) => {
  return {
    type: 'ADD_MONEY',
    details,
  };
};

const Customers = (props) => {
  const userData = useSelector((state) => state.bankData);
  const [modal, setModal] = useState(false);
  const [transactionDetail, setTD] = useState({
    senderEmail: null,
    recieverEmail: null,
    amount: 0,
  });
  const dispatch = useDispatch();

  const inputHandler = (value, type) => {
    if (type === 'reciever') {
      setTD((prev) => ({
        ...prev,
        recieverEmail: value + '@gmail.com',
      }));
    }
    if (type === 'sender') {
      setTD((prev) => ({
        ...prev,
        senderEmail: value + '@gmail.com',
      }));
    }
    if (type === 'amount') {
      setTD((prev) => ({
        ...prev,
        amount: parseInt(value),
      }));
    }
  };

  const transferHandler = () => {
    let isValidSender = userData.find(
      (item) => item.email === transactionDetail.senderEmail
    );
    console.log(isValidSender);
    let isValidReciever = userData.find(
      (item) => item.email === transactionDetail.recieverEmail
    );
    if (
      isValidReciever &&
      isValidSender &&
      transactionDetail.amount > 0 &&
      isValidSender.balance >= transactionDetail.amount
    ) {
      dispatch(addMoney(transactionDetail));
    } else {
      if (!isValidReciever || !isValidSender || transactionDetail.amount <= 0) {
        alert(
          'Error Occured : Problems Can Be Wrong Email Entered Or Invalid Amount'
        );
      } else if (isValidSender.balance < transactionDetail.amount) {
        alert('Error Occured : Not Enough Balance');
      }
      return;
    }
    setModal(false);
  };

  return (
    <React.Fragment>
      <TransferModal
        removeShow={() => setModal(false)}
        show={modal}
        onChange={inputHandler}
        onTransfer={transferHandler}
      />
      <section className={styles.Container}>
        <div className={styles.BtnContainer}>
          <Button
            color="white"
            onClick={() => setModal(true)}
            bgColor="#d84b65"
          >
            Transfer Money
          </Button>
          <Button
            onClick={() => props.history.push('/transactions')}
            color="white"
            bgColor="#571e24"
          >
            Transaction History
          </Button>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Account No.</th>
            <th>State</th>
            <th>Balance</th>
          </tr>
          {userData.map((item, index) => (
            <tr key={index}>
              <td className={styles.VisitCus}>
                <Link to={`/customers/${item.account}`}>{item.name}</Link>
              </td>
              <td>{item.email}</td>
              <td>{item.account}</td>
              <td>{item.state}</td>
              <td>{item.balance}</td>
            </tr>
          ))}
        </table>
      </section>
    </React.Fragment>
  );
};

export default Customers;
