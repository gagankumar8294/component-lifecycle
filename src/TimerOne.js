import React from "react";

class TimerOne extends React.Component {

    constructor() {
        super();

        this.state = {
            name : "ComponentA",
            data: []
        }
        console.log("ComponentA Constructor")
    }

    static getDerivedStateFromProps(props , state) {
        console.log("ComponentA getDerivedStateByprops");
        return null;
    }

    componentDidMount() {
        console.log("ComponentA componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) =>  {
            if(!response.status === 200) {
                console.log("failed to fetch data")
            }
            return (
                response.json() 
            )
        })
        .then(data => this.setState({ data }))  
    }

    render() {
        console.log("ComponentA render");
        return (
            <>
                <h2>Time Spent </h2>
                {this.state.data.map((data , index) => {
                    return (
                            <li key={index}>{data.name}</li>
                    )
                })}
            </>
        )
    }
}

export default TimerOne;