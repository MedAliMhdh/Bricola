import { useEffect } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ArtisanCard from './components/ArtisanCard';
import Post from './components/Post';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ArtisanProfile from './components/ArtisanProfile';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { Provider } from 'react-redux';

if (localStorage.token) {
  console.log(localStorage);
  setAuthToken(localStorage.token);
  console.log('hello');
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/artisan' component={ArtisanCard} />
          {/*should be deleted***** just for test*/}
          <Route path='/artisanprofile' component={ArtisanProfile} />
          <Route path='/post' component={Post} />
          {/*should be deleted***** just for test*/}
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
