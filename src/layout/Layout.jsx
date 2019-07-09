import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import CartOnScreen from '../components/CartOnScreen';
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
      {!isLogin && <CartOnScreen />}
      <Switch>
        <Route component={Home} exact path='/Sweet-for-happiness/#/' />
        <Route component={Login} exact path='/Sweet-for-happiness/#/login' />
        <Route component={Cart} path='/Sweet-for-happiness/#/cart' />
        <Route
          component={Product}
          exact
          path='/Sweet-for-happiness/#/product'
        />
        <Route
          component={ProductDetail}
          path='/Sweet-for-happiness/product/#/goNorway:id'
        />
        <PrivateRoute
          component={Dashboard}
          path='/Sweet-for-happiness/#/dashboard'
        />
        <Route component={PageNotFound} />
      </Switch>
      {!isLogin && <Footer />}
    </Router>
  );
};

export default Layout;
