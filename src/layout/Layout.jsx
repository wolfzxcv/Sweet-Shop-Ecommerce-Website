import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import Product from '../components/Product';
import Login from '../components/Login';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import PageNotFound from '../components/PageNotFound';
import { SharedContext } from '../contexts/SharedContext';

const Layout = () => {
  const { isLogin } = useContext(SharedContext);
  return (
    <Router>
      {!isLogin && <Header />}
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Product} path='/product' />
        <Route component={Login} path='/login' />
        <Route component={Cart} path='/cart' />
        <PrivateRoute component={Dashboard} path='/dashboard' />
        <Route component={PageNotFound} />
      </Switch>
      {!isLogin && <Footer />}
    </Router>
  );
};

export default Layout;
