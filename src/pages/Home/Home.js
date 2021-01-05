import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => (
  <header className={styles.Home}>
    <div className={styles.Container}>
      <h1>Welcome To Public Bank</h1>
      <label>
        <Link to="/customers">View All Customers</Link>
      </label>
    </div>
  </header>
);

export default Home;
