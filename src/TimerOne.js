import React from "react";

class TimerOne extends React.Component {

    constructor() {
        super();

        this.state = {
            time: 0,
        }
        this.timer = null;
        console.log("TimerOne Constructor");
    }

    static getDerivedFromProps() {
        console.log("TimerOne getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate(nextProps, nexState) {
        return true;
    }

    render() {
        console.log("TimerOne render");

        return (
            <>
                <h2>Time Spent: </h2>
                <h2>{this.state.count}{new Date(this.state.time * 1000).toISOString().slice(11,19)}</h2>
            </>
        )
    }

    componentDidMount() {
        console.log("TimerOne componentDidMount");
        console.log("___________________________")

        this.timer = setInterval(() => {
            this.setState((prevState) => ({time: prevState.time+1}))
        }, 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("TimerOne getSnapShotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("TimeOne componentDidUpdate");
        console.log("___________________________");
    }
}

export default TimerOne;