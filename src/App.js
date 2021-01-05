import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
//Pages
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import Single from './pages/Single/Single';
import Transaction from './pages/Transaction/Transaction';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/transactions" exact component={Transaction} />
        <Route path="/customers/:accountno" component={Single} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default App;
