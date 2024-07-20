import React from 'react';

class ComponentA extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "Component A",
      data: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  }
  

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.data.map((d) => {
            return (
              <li>{d.username}</li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default ComponentA;