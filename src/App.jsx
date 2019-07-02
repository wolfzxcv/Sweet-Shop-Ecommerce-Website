import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/theme';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Product} path='/product' />
          <Route component={Login} path='/login' />
          <Route component={Cart} path='/cart' />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
