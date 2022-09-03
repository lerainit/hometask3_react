import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './favorites';
import CartPage from './cart';
import ProductPage from './productPage';

const AppRoutes = (props) => {
    return (
     
        <Routes>
            <Route path='/' element={   <ProductPage  products={props.products} openModal={props.openModal} addFavoritesFunc={props.addtoFavorites}  ></ProductPage>} />
           <Route path='/favorites' element={<FavoritesPage/>} />
         
           <Route path='/cart' element={<CartPage addCards={JSON.parse(localStorage.getItem('addCards'))} deleteCartItem ={props.deleteCartItem}/>}/>
         </Routes>

        
    )
}
export default AppRoutes;
//<Cart addCards={JSON.parse(localStorage.getItem('addCards'))} deleteCartItem ={props.deleteCartItem}/>     
//