import './App.css';
import Navb from './components/Navb';
import Register from './components/Register';
import Login from './components/Login';
import { Switch, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
      <Link to='/'></Link>
      <Switch>
        <Route exact path='/' component={Navb} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
