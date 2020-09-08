import React, { Component } from 'react';
import {isAuthenticated} from './index';

const PrivateRoutes = ({children, ...rest}) => {
    return (
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
}
 
export default PrivateRoutes;