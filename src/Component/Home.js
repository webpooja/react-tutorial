import React from 'react'



export default function Home() {
  return (
    <div>
    <div className="add-to-cart">
     <img src="assets/image\cart.jpg"/>

     </div>
     <h1>Home Component</h1>
     
     <div className="cart-wrapper">
        <div className="img-wrapper item">
           <img src="assets/image\moblie.jpg" />
        </div>

        <div className="text-wrapper item">
        <span>I PHONE</span>
        <span>$ 1000.00</span>
       </div>
    
        <div className="btn-wrapper item">
        <button>Add to cart</button>      
      </div>
     </div>
    </div>
  )
}
