import React from 'react'
// import './App.css'

class ClassClock extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div className="App">
                <h1>RealTime CLASSClock</h1>
                <hr/>
                <h1>{this.state.date.toLocaleString()}</h1>
                <hr/>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <hr/>
                <h2>{this.state.date.toLocaleDateString()}</h2>
                <hr/>
                <h3>UTC time: {this.state.date.toUTCString()}</h3>
            </div>
        )
    }
}

export default ClassClock;