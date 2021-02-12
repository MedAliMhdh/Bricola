import { useEffect } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import Post from './components/Post';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ArtisanProfile from './components/ArtisanProfile';
import CreateProfile from './components/profile-forms/CreateProfile';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Navb from './components/Navb';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navb></Navb>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/artisanprofile' component={ArtisanProfile} />
        <Route path='/post' component={Post} />
        {/*should be deleted***** just for test*/}
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
      </Switch>
    </div>
  );
};

export default App;
