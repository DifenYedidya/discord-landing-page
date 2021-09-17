import React, { useState } from 'react'
// import '../App.css'

function FuncClock() {
    const [date, setDate] = useState(new Date())
    function tick(){
        setDate(new Date())
    }

    setInterval(() => tick(), 1000)

    return (
        <div className="App">
            <h1>REALTIME FUNCTION CLOCK</h1>
            <hr/>
            <h1>{date.toLocaleTimeString()}</h1>
            <hr/>
            <h2>{date.toLocaleDateString()}</h2>
            <hr/>
            <h3>UTC time: {date.toUTCString()}</h3>
        </div>
    )
}

export default FuncClock;