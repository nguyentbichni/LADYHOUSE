import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import history from './util/history';

import theme from "./constants/themes";

import LoginLayout from './layouts/LoginLayout';
import DefaultLayout from './layouts/DefaultLayout';

import Login from './pages/Login';
import Home from './pages/User/Home';
import ProductList from './pages/User/ProductList';
import ProductDetail from './pages/User/ProductDetail';


export function App(){
  return(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <LoginLayout exact path="/login" component={Login} />

          <DefaultLayout exact path="/products" component={ProductList}/>
          <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout
              exact
              path="/product/:id"
              component={ProductDetail}
            />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}


export default App;
