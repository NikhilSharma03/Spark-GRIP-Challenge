import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Single.module.css';
import Button from './../../components/UI/Button/Button';

const Single = (props) => {
  const userId = useParams().accountno;
  const data = useSelector((state) => state.bankData);
  const userDetail = data.find((item) => item.account === userId);

  return (
    <section className={styles.Single}>
      <div className={styles.Container}>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png"
          alt="profile"
        />
        <h1>Name : {userDetail.name}</h1>
        <h1>Email : {userDetail.email}</h1>
        <h1>Account Number : {userDetail.account}</h1>
        <h1>State : {userDetail.state}</h1>
        <h1>Balance : {userDetail.balance}</h1>
        <Button
          style={{ marginTop: '2rem' }}
          color="white"
          bgColor="#d84b65"
          onClick={() => props.history.goBack()}
        >
          Go Back
        </Button>
      </div>
    </section>
  );
};

export default Single;
