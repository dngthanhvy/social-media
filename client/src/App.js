import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
