import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import ArtisanCard from './components/ArtisanCard';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className='App'>
      <Link to='/'></Link>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/artisan' component={ArtisanCard} />
      </Switch>
    </div>
  );
};

export default App;
