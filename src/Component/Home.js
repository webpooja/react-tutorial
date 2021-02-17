import React from 'react'

export default function Home(props) {
  console.log('home', props.data)
  return (
    <div>
    <h1>Add & Remove cart</h1>
     <div className="cart-wrapper">
        <div className="img-wrapper item">
           <img src="assets/image\moblie.jpg" />    
        </div>

        <div className="text-wrapper item">
        <span>I PHONE</span>
        <span>$ 1000.00</span>
       </div>
    
        <div className="btn-wrapper item">
        <button onClick={()=>
        props.addToCartHandler({price:1000, name:'I phone 11'})}>Add to cart</button>    
         <button className="remove-to-btn"
         onClick={()=>
        props.removeToCartHandler()}>Remove to cart</button>  
      </div>
     
     </div>
    </div>
  )
}
