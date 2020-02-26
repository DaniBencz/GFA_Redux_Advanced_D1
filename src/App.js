import React from 'react'
import './App.css'
import Increaser from './components/increaser'
import Decreaser from './components/decreaser'
import Resetter from './components/resetter'
import Setter from './components/setter'
import Tags from './components/tags'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="upper-row">
          <Increaser></Increaser>
          <Decreaser></Decreaser>
          <Resetter></Resetter>
          <Setter></Setter>
        </div>
        <div id="lower-row">
          <Tags></Tags>
        </div>
      </header>
    </div>
  );
}

export default App;
