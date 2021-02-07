import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import ArtisanCard from "./components/ArtisanCard";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ArtisanProfile from "./components/ArtisanProfile";
import Post from "./components/Post";

const App = () => {
  return (
    <div className='App'>
      <Link to='/'></Link>
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
  );
};

export default App;
