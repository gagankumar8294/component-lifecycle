import React from 'react';
import './App.css';
// import ComponentA from './ComponentA';
import TimerOne from './TimerOne';
// import ComponentB from './ComponentB';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <ComponentA /> */}
        <TimerOne />
        {/* <ComponentB /> */}
      </>
    )
  }
}
export default App;