import React from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';


const App = () => {
  const[showCart,setShowCart]=useState(false);
  const[cart,setCart]=useState([]);
  const [search,setSearch]=useState('');
  console.log(search);

  const handleClick=(value)=>{
    const isPresent = cart.some((product) => value.id === product.id);

    if (isPresent) {
      alert('Item is already added to the cart!');
    } else {
      setCart([...cart, value]);
    }
  
  }

  return (
    <div>
      <Navbar size={cart.length} setShowCart={setShowCart} setSearch={setSearch} />
      {
        showCart ? <Cart cart={cart} setCart={setCart}/> :  <Card handleClick={handleClick} search={search}/> 

      }
      
    </div>
  )
}

export default App
