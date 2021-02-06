import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import ArtisanCard from './components/ArtisanCard';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ArtisanProfile from './components/ArtisanProfile';
// import Alert from './components/Alert';

//Redux
// import store from './store';
// import { Provider } from 'react-redux';

const App = () => {
  return (
    // <Provider store={store}>
    <div className='App'>
      <Link to='/'></Link>
      {/* <Alert /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/artisan' component={ArtisanCard} />
        <Route path='/artisanprofile' component={ArtisanProfile} />
      </Switch>
    </div>
    // </Provider>
  );
};

export default App;
