import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';



function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
    <div>
        <div className="grid-container">
            <header className="row">
              <div>
                <Link className="brand" to="/">Styletude</Link>
              </div>
              <div>
                <Link to="/cart">Cart
                {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                <Link to="/signin">Sign In</Link>
              </div>
            </header>            
            <main>
             <Route path="/cart/:id?" component={Cart} ></Route>
             <Route path="/product/:id" component={ProductDetails} ></Route> 
             <Route path="/" component={Home} exact></Route>              
            </main>
            <footer className="row center"> <p>© 2021 Styletude. All rights reserved | Design by <span>#Suzan_Naeem</span></p></footer>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
