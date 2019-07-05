import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import SharedProvider from './contexts/SharedContext';
import theme from './theme/theme';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Home from './components/Home';
import Manage from './components/Manage';
import Product from './components/Product';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SharedProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Product} path='/product' />
            <Route component={Login} path='/login' />
            <Route component={Cart} path='/cart' />
            <PrivateRoute component={Manage} path='/manage' />
          </Switch>
          <Footer />
        </Router>
      </SharedProvider>
    </ThemeProvider>
  );
}

export default App;
