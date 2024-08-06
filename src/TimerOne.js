import React from "react";

class TimerOne extends React.Component {

    constructor() {
        super();

        this.state = {
            time: 0,
        }
        this.timer = null;
        console.log("ComponentA Constructor")
    }

    static getDerivedStateFromProps() {
        console.log("ComponentA getDerivedStateByprops");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        console.log("ComponentA render");
        return (
            <>
                <h2>Time Spent: </h2>
                {new Date(this.state.time * 1000).toISOString().slice(11,19)}
            </>
        )
    }

    componentDidMount() {
        console.log('TimerOne componentDidMount')
        console.log('_________________________')
        this.timer = setInterval(() => {
            this.setState((prevState) => ({time: prevState.time + 1}))
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("TimerOne getSnapShotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log('Component Update');
        console.log('________________________');
        if(this.state.time == 10) {
            clearInterval(this.timer);
        }
    }

    componentWillMount() {
        console.log('Component Will UnMount');
    }
}

export default TimerOne;