import { useEffect, useState } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ArtisanProfile from './components/ArtisanProfile';
import PersonProfile from './components/PersonProfile';
import VisitedProfile from './components/VisitedProfile';
import About from './components/navPages/About';
import Blog from './components/navPages/Blog';
import ContactUs from './components/navPages/ContactUs';
import Team from './components/navPages/Team';
import Alert from './components/Alert';

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
  const [search, setSearch] = useState(false);
  const [rate, setRate] = useState(0);
  const [job, setJob] = useState('');
  const [equipment, setEquipment] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  const alerts = useSelector((state) => state.alert);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navb
        setSearch={setSearch}
        setRate={setRate}
        setJob={setJob}
        setEquipment={setEquipment}
        setCity={setCity}
      />
      {alerts !== null && alerts.length > 0 && (
        <div className='alertsContainer fixed-top'>
          <Alert className='alerts' alerts={alerts} />
        </div>
      )}

      <Switch>
        <Route exact path='/'>
          {' '}
          <Home
            search={search}
            setSearch={setSearch}
            rate={rate}
            setRate={setRate}
            job={job}
            setJob={setJob}
            equipment={equipment}
            setEquipment={setEquipment}
            city={city}
            setCity={setCity}
          />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/blog' component={Blog} />
        <Route path='/ourteam' component={Team} />
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
