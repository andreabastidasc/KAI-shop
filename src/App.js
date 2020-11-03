import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import ItemCount from './Components/ItemCount';

function App() {
  return (
    <div className="App container-fluid no-gutters">
      <header className="row">
        <NavBar />
      </header>
      <main className="row">
        <Home greeting='Bienvenidos a Kai' />
        <section className="col-12 mt-4">
          <ItemCount max="10" min="0"/>
        </section>
      </main>
    </div>
  );
}

export default App;
