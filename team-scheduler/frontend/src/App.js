import './App.css';
import React from 'react';
import { Router } from './components/Router'
import {Link} from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Team Scheduler</a>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to="/titles">Titles</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to='/employees'>Employees</Link></a>
              </li>
            </ul>
          </div>         
        </nav>
        <Router />
      </div>
    );
  }

}

export default App;
