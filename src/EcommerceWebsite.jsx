import React, { useState } from 'react';
function EcommerceWebsite(){
    const [count,setCount]=useState(0);
        const increment=()=>{
        setCount(count+1);
            }
    const reset=()=>{
        setCount(0);
            }

    return(
        
        <div className="div-container">
            <header>E-Commerce in React</header>
        <div className="item-container">
        <img src="https://via.placeholder.com/150" alt="Item" className="image"></img>
        <p className="item">Item</p>
        <p className="desc">Description</p>
        <p className="cost">Cost</p>
        <button className="cart-button" onClick={increment}>Add to Cart</button>
    </div>
    <div className="item-container">
        <img src="https://via.placeholder.com/150" alt="Item" className="image"></img>
        <p className="item">Item</p>
        <p className="desc">Description</p>
        <p className="cost">Cost</p>
        <button className="cart-button" onClick={increment}>Add to Cart</button>
    </div>
    <div className="item-container">
        <img src="https://via.placeholder.com/150" alt="Item" className="image"></img>
        <p className="item">Item</p>
        <p className="desc">Description</p>
        <p className="cost">Cost</p>
        <button className="cart-button" onClick={increment}>Add to Cart</button>
    </div>
    <p class="cart-quantity">Cart Quantity: {count}</p>
    <button onClick={reset} className="reset-button">Reset</button>
    </div>
    
    )    

}
export default EcommerceWebsite