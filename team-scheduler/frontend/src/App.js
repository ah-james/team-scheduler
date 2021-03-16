import logo from './logo.svg';
import './App.css';
import React from 'react';
import Weekday from './containers/Weekday'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
      </div>
    );
  }

}

export default App;
