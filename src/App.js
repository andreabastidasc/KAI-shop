import React from 'react';
import {Switch , Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { useState } from 'react';
import { Fragment } from 'react';
import HomeContainer from './Components/HomeContainer';
import ShopContainer from './Components/ShopContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartContainer from './Components/CartContainer';



function App() {
  return (
    <BrowserRouter>
    <div className="App container-fluid no-gutters">
      <header className="row">
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/' render={() =>  <HomeContainer />} />
        <Route path='/shop' render={() =>  <ShopContainer />} />
        <Route path='/item/:id' render={() =>  <ItemDetailContainer />} />
        <Route path='/cart' render={() =>  <CartContainer />} />
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}


export default App;
