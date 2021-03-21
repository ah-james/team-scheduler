import './App.css';
import React from 'react';
import { Router } from './components/Router'
import {Link} from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Link to="/">Home </Link>
        <Link to="/titles">Titles </Link>
        <Link to='/employees'>Employees </Link>
        <h1>Team Scheduler</h1>
        <Router />
      </div>
    );
  }

}

export default App;
