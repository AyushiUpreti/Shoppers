import React from 'react';
import list from '../data';
import './Card.css';
import headerImg from '../Assets/Main2.jpg';
import Carousel from './Carousel';

const Card = ({handleClick}) => {
  return (
    <>
    <div className="header_img">
        <img src={headerImg} alt="" />
        <Carousel/>
    </div>
       <h2 className='heading'>Our Products</h2>
    <div className='card_section'>
      {list.map((value,index)=>(
        <div key={index} className='cards'>
            <div className="imgs">
                <img src={value.src} alt="images" />
            </div>
            <div className="info">
            <div className="details">
                <p>{value.title}</p>
                <p>{value.price}</p>
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
