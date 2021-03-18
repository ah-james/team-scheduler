import './App.css';
import React from 'react';
import { Router } from './components/Router'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Team Scheduler</h1>
        <Router />
        {/* <Weekday day="Monday"/>
        <Weekday day="Tuesday"/>
        <Weekday day="Wednesday"/>
        <Weekday day="Thursday"/>
        <Weekday day="Friday"/>
        <Weekday day="Saturday"/>
        <Weekday day="Sunday"/> */}
      </div>
    );
  }

}

export default App;
