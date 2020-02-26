import React from 'react'
import './App.css'
import Increaser from './components/increaser'
import Decreaser from './components/decreaser'
import Resetter from './components/resetter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Increaser></Increaser>
        <Decreaser></Decreaser>
        <Resetter></Resetter>
      </header>
    </div>
  );
}

export default App;
