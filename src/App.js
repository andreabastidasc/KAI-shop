import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() {
  return (
    <div className="App container-fluid no-gutters">
      <header className="row">
        <NavBar />
      </header>
      <main className="row">
        <Home greeting='Bienvenidos a Kai' />
      </main>
    </div>
  );
}

export default App;
