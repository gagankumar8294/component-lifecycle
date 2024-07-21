import React from 'react';
import './App.css';
import ComponentA from './ComponentA';
import TimerOne from './TimerOne';

class App extends React.Component {
  render() {
    return (
      <>
        <ComponentA />
        <TimerOne />
      </>
    )
  }
}
export default App;