import React from 'react';
import {Route, Redirect} from 'react-router-dom'

function AdminLayout({component: Component, ...props }) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo && userInfo.id) {
    if (userInfo.role !== 'admin') {
      return <Redirect to="/" />;
    }
  } else {
    return <Redirect to="/login" />;
  }

  return (
    <Route {...props} 
        render={(routerProps) => (
            <>
              <div className="main">
                  <Component {...routerProps}/>
              </div>
            </>
        )}
    />
  );
}

export default AdminLayout;
