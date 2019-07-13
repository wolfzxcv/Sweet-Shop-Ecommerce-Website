import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loading from './Loading';
import { SharedContext } from '../../contexts/SharedContext';

const Header = lazy(() => import('../Header/Header'));
const CartOnScreen = lazy(() => import('../Cart/CartOnScreen'));
const Login = lazy(() => import('../Login/Login'));
const Cart = lazy(() => import('../Cart/Cart'));
const Checkout = lazy(() => import('../Checkout/Checkout'));
const CheckoutOrderDetail = lazy(() =>
  import('../Checkout/CheckoutOrderDetail')
);
const Home = lazy(() => import('../Home/Home'));
const Product = lazy(() => import('../Product/Product'));
const ProductDetail = lazy(() => import('../Product/ProductDetail'));
const Dashboard = lazy(() => import('../Dashboard/Dashboard'));
const Footer = lazy(() => import('../Footer/Footer'));
const PageNotFound = lazy(() => import('../PageNotFound/PageNotFound'));

const Layout = () => {
  const { isLogin, isLoading } = useContext(SharedContext);
  return (
    <Suspense fallback={<Loading />}>
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
          <Route
            component={Product}
            exact
            path='/Sweet-for-happiness/product'
          />
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
        {isLoading && <Loading />}
        {!isLogin && <Footer />}
      </Router>
    </Suspense>
  );
};

export default Layout;
