import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import Login from '../components/Login';
import Cart from '../components/Cart';
import Home from '../components/Home';
import Product from '../components/Product';
import ProductDetail from '../components/ProductDetail';
import Dashboard from '../components/Dashboard';
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
        <Route component={Login} path='/login' />
        <Route component={Cart} path='/cart' />
        <Route component={Product} exact path='/product' />
        <Route component={ProductDetail} path='/product/goNorway:id' />
        <PrivateRoute component={Dashboard} path='/dashboard' />
        <Route component={PageNotFound} />
      </Switch>
      {!isLogin && <Footer />}
    </Router>
  );
};

export default Layout;
