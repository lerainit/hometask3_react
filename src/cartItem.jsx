import React from 'react'
const CartItem =(props) => {

   
    return(
        <>
        
        <ul>
            <li><span>Name:</span>{props.name}</li>
            <li><span>Price:</span>{props.price}</li>
            <li><img className='image' src={props.url}   alt = 'Product '/></li>
            <li><span>Art:</span>{props.art}</li>

           
<button  className='deleteCart_btn' onClick = {() =>{props.deleteCartItem(props.id)}}>Delete item</button>
        </ul>
        
        
        
        </>
    )
}
export default CartItem;