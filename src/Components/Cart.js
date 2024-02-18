import React,{useEffect, useState} from 'react';
import './Cart.css';

const Cart = ({cart,setCart}) => {
    const[price,setPrice]=useState(0);

    const handleprice=()=>{
        let ans =0;
        cart.map((value)=>(
            ans += value.amount * value.price
        ))
        setPrice(ans);
    }

    const handlremove=(id)=>{
        const arr=cart.filter((value)=>value.id !== id);
        setCart(arr);

    }
    
    const handleChange = (value, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === value.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}



    useEffect(()=>{
        handleprice();
    })

  return (
    <>
   <h2 className='heading2'>Cart</h2>
    <div className="grid_container">
    {cart?.map((value)=>(
        <div className="cart_box" key={value.id}>
            <div className="cart_img">
                <img src={value.src} alt="" />
                <p>{value.title}</p>
            </div>
            <div  className="addsubbtn">
                <button onClick={()=>handleChange(value, -1)}> - </button>
                <button>{value.amount}</button>
                <button onClick={()=>handleChange(value, +1)}> + </button>
            </div>
            <div>
                <span>₹{value.price}</span>
                <button className='removebtn' onClick={()=>handlremove(value.id)}>Remove</button>
            </div>
            </div>
    ))}
    <div className='totalprice'>
        <span>Total price of your cart</span>
        <span>₹ {price}</span>
    </div>
  </div>
  </>
)
}
export default Cart;
