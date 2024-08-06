import React from 'react';
import './App.css';
// import ComponentA from './ComponentA';
import TimerOne from './TimerOne';
// import ComponentB from './ComponentB';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      mount: false,
    }
  }

  handleMount = () => {
    this.setState((prevState) => ({mount : !prevState.mount}))
  }

  render() {
    return (
      <>
        {/* <ComponentA /> */}
        <button onClick={this.handleMount}>{this.state.mount ? "UN-MOUNT" : "mount"}</button>
        {this.state.mount ? <TimerOne /> : null}
        
        {/* <ComponentB /> */}
      </>
    )
  }
}
export default App;