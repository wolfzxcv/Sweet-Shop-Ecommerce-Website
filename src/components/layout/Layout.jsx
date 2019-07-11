import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Header from '../Header/Header';
import CartOnScreen from '../Cart/CartOnScreen';
import Login from '../Login/Login/Login';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import CheckoutOrderDetail from '../Checkout/CheckoutOrderDetail';
import Home from '../Home/Home/Home';
import Product from '../Product/Product';
import ProductDetail from '../Product/ProductDetail';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer/Footer';
import PageNotFound from '../PageNotFound';
import { SharedContext } from '../../contexts/SharedContext';

const Layout = () => {
  const { isLogin } = useContext(SharedContext);
  return (
    <Router>
      {!isLogin && <Header />}
      {!isLogin && <CartOnScreen />}
      <Switch>
        <Route component={Home} exact path='/Sweet-for-happiness/' />
        <Route component={Login} exact path='/Sweet-for-happiness/login' />
        <Route component={Cart} path='/Sweet-for-happiness/cart' />
        <Route
          component={Checkout}
          exact
          path='/Sweet-for-happiness/checkout'
        />
        <Route component={Product} exact path='/Sweet-for-happiness/product' />
        <Route
          component={ProductDetail}
          path='/Sweet-for-happiness/product/goNorway:id'
        />
        <Route
          component={CheckoutOrderDetail}
          path='/Sweet-for-happiness/checkout/goNorway:id'
        />
        <PrivateRoute
          component={Dashboard}
          path='/Sweet-for-happiness/dashboard'
        />
        <Route component={PageNotFound} />
      </Switch>
      {!isLogin && <Footer />}
    </Router>
  );
};

export default Layout;
