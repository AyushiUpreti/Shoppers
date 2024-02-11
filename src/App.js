import React from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { useState } from 'react';
import './App.css';


const App = () => {
  const[show,setShow]=useState(true);
  const[cart,setCart]=useState([]);

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
      <Navbar size={cart.length}/>
      <Card handleClick={handleClick}/>
    </div>
  )
}

export default App
