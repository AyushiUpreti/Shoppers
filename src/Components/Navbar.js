import React from 'react';
import './Navbar.css';

const Navbar = ({size}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className='my_shop'>
          Shoppers
        </span>
        <div className="cart">
          <span>
          <i class="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
