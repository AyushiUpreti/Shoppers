import React from 'react';
import list from '../data';
import './Card.css';
import headerImg from '../Assets/Home-4.png';

const Card = ({handleClick,search}) => {
  return (
    <>
    
    <div className="header_img">
        <img src={headerImg} alt="" />
    </div>
    <div className="container">
      <div>
        <h2 className='heading'>Our Products</h2>
      </div>
       <div className="sort">
      <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort">
          <option value="lowest">Price : Lowest</option>
          <option value="highest">Price : highest</option>
          <option value="lowest">Alphabetically : a - z</option>
        </select>
      </form>
    </div>
    </div>

    <div className='card_section'>
      {list.filter((value)=>{
        return search.toLowerCase()==='' ? value : value.title.toLowerCase().includes(search)
      }).map((value,index)=>(
        <div key={index} className='cards'>
            <div className="imgs">
                <img src={value.src} alt="images" />
            </div>
            <div className="info">
            <div className="details">
                <p>{value.title}</p>
                <p>₹{value.price}</p>
            </div>
            <div className="btn">
            <button onClick={()=>handleClick(value)}>Cart</button>
            </div>
            </div>
            
        </div>
      ))}
    </div>
    </>
  )
}

export default Card;
