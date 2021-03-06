import React from 'react';
import {Switch , Route, BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { useState } from 'react';
import { Fragment } from 'react';
import HomeContainer from './Containers/HomeContainer';
import ShopContainer from './Containers/ShopContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContainer from './Containers/CartContainer';
import Footer from './Components/Footer'
import CartContext from './Context/CartContext';


function App() {
  return (
    <CartContext>
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
          <footer className='row'>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}


export default App;
