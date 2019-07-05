import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { isLogin } = useContext(SharedContext);
  return (
    <Route
      {...rest}
      render={props =>
        isLogin ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
