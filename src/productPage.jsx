import React from 'react'
import Card from './productCard'



const ProductPage = (props) =>{

return(
<>
   
     {props.products.map(({id,name,price,art,url,addFavorites}) =><Card key={id}  id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites=== true? '#FFFF00':'#fff' } addFavoritesFunc={() =>{props.addFavoritesFunc(id)}} openModal ={props.openModal} ></Card>)}
    
    </>
    )
    
    
    
    }
    export default ProductPage
    //fill={'#FFFF00'} addFavoritesFunc={props.addFavoritesFunc} openModal ={props.openModal} ></Card>


   // <header className='header'><h2 className='logo'>Fashion store</h2 ><div className='button_container'><button className='clear_cart_btn'  onClick ={props.clearCart}>Clear Cart</button><button className='clear_fav_btn' onClick ={props.clearFavorites}>Clear Favorites</button></div><div className='container'><img className='cart' src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2>Added cart:{props.addCards}</h2>
   // <img className='favorite_img'src="./star.png" alt="" /> <h2>Added favorites:{props.addFavoritesPage}</h2></div></header>
   // {props.products.map(({id,name,price,art,url,addFavorites}) =><Card key={id}  id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites=== true? '#FFFF00':'#fff' } addFavoritesFunc={() =>{props.addFavoritesFunc(id)}} openModal ={props.openModal} ></Card>)}
   