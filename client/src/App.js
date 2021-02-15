import { useEffect } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import Post from './components/Post';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ArtisanProfile from './components/ArtisanProfile';
import PersonProfile from './components/PersonProfile';
import VisitedProfile from './components/VisitedProfile';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import DeleteProfile from './components/profile-forms/DeleteProfile';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Navb from './components/Navb';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  const dispatch = useDispatch();

  // const userId = useSelector((state) => state.auth);

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
        <Route
          path='/visitedartisanprofile/:profileId'
          render={(props) => (
            <VisitedProfile profileId={props.match.params.profileId} />
          )}
        />
        <PrivateRoute
          exact
          path={`/artisanprofile/me`}
          component={ArtisanProfile}
        />
        <PrivateRoute
          exact
          path={`/personprofile/me`}
          component={PersonProfile}
        />
        <Route path='/post' component={Post} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute
          exact
          path={`/delete-profile`}
          component={DeleteProfile}
        />
      </Switch>
    </div>
  );
};

export default App;
