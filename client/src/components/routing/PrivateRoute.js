import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Component } from 'react';
const PrivateRoute = ({ component = Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      {console.log('auth', auth.isAuthenticated, auth.loading)};
      <Route
        {...rest}
        component={(props) => {
          if (!auth.isAuthenticated) {
            return <Redirect to='/login' />;
          } else {
            console.log('pprops', props);
            return <Component {...props} />;
          }
        }}
      />
    </>
  );
};

export default PrivateRoute;
