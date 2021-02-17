import React from 'react'

export default function Header(props) {
  console.log('home', props.data)
  return (
    <div>
    <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
     <img src="assets/image\cart.jpg" alt="cart"/>

     </div>
    
    </div>
  )
}
