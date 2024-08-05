import React from 'react';

class ComponentB extends React.Component {

  constructor() {
    super()
    this.state = ({
      data : [],
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ data : data }))
  }

  render() {
    return (
      <><ul>
        {this.state.data.map((data , index) => {
            return (
            <li><h1 key={index}>{data.username}</h1></li>
            )
        })}</ul>
      </>
    )
  }
}

export default ComponentB;