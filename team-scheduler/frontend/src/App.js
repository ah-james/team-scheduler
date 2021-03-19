import './App.css';
import React from 'react';
import { Router } from './components/Router'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Team Scheduler</h1>
        <Router />
      </div>
    );
  }

}

export default App;
