import React from 'react'
import Card from './productCard'
import CartItem from './cartItem'

const CartPage = (props) =>{


return(

<>
<h1>Cart</h1>
{props.addCards.map(({id,name,price,art,url}) =><CartItem  id ={id}  name= {name} price ={price} art ={art} url={url} deleteCartItem ={props.deleteCartItem} ></CartItem>)}

</>





)






}
export default CartPage
//{  

//props.addCards.map(({id,name,price,art,url}) =><CartItem  id ={id}  name= {name} price ={price} art ={art} url={url} deleteCartItem ={props.deleteCartItem} ></CartItem>)}


