import React, { useState } from 'react'
import './App.css'
import FuncClock from './components/FunctionalClock'
import ClassClock from './components/ClassClock'

function App() {
  return(
    <div className="App">
      <ClassClock/>
      <FuncClock/>
    </div>
  )
}

export default App;