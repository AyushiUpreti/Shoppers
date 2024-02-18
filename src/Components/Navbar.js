import React from 'react';
import './Navbar.css';

const Navbar = ({size, setShowCart, setSearch}) => {

  return (
    <nav>
      <div className="nav_box">
        <span className='my_shop' onClick={()=>{setShowCart(false)}}>
          FurnishXpert
        </span>

        <div className="cart" >
        <div className="search">
          <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' />
        </div>
        <div>
          <span>
          <i class="fas fa-cart-plus" onClick={()=>{setShowCart(true)}}></i>
          </span>
          <span>{size}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
