import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Topbar />
      <Home />
    </Router>
  );
}

export default App;
