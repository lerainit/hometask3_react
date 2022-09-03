import React from 'react'

import CartItem from './cartItem'

const CartPage = (props) =>{


return(

<>

{props.addCards.map(({id,name,price,art,url}) =><CartItem key={id}  id ={id}  name= {name} price ={price} art ={art} url={url} deleteCartItem ={props.deleteCartItem} ></CartItem>)}

</>





)






}
export default CartPage
//{  

//props.addCards.map(({id,name,price,art,url}) =><CartItem  id ={id}  name= {name} price ={price} art ={art} url={url} deleteCartItem ={props.deleteCartItem} ></CartItem>)}


