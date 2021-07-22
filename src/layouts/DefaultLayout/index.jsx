import React from 'react';
import {Route, Redirect} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

function DefaultLayout({component: Component, ...props }) {

  return (
    <Route {...props} 
        render={(routerProps) => (
            <>
              <Header/>
              <div className="main">
                  <Component {...routerProps}/>
              </div>
              <Footer/>
            </>
        )}
    />
  );
}

export default DefaultLayout;
