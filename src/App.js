import React, { useEffect } from 'react';
import { Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import history from './util/history';

import theme from "./constants/themes";

import LoginLayout from './layouts/LoginLayout';
import RegisterLayout from './layouts/RegisterLayout';
import DefaultLayout from './layouts/DefaultLayout';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/User/Home';
import ProductList from './pages/User/ProductList';
import ProductDetail from './pages/User/ProductDetail';
import CartList from './pages/User/CartList';

import { getUserInfoAction } from './redux/actions';


export function App({getUserInfo}){
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if( userInfo && userInfo.id){
      getUserInfo({id: userInfo.id});
    }
  }, [])
  return(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <LoginLayout exact path="/login" component={Login} />
          <RegisterLayout exact path="/register" component={Register} />

          <DefaultLayout exact path="/products" component={ProductList}/>
          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout
            exact
            path="/product/:id"
            component={ProductDetail}
          />
          <DefaultLayout exact path="/cartlist" component={CartList}/>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (params) => dispatch(getUserInfoAction(params)),
  }
}
export default connect(null, mapDispatchToProps)(App);
