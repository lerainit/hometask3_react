import React from 'react'
import FavItem from './FavItem'

const FavoritesPage = (props) =>{

return(
  
   
    
    <>

{props.addFavorites.map(({id,name,price,art,url}) =><FavItem key={id}  id ={id}  name= {name} price ={price} art ={art} url={url} ></FavItem>)}

</>   
    
    
   
)


}

export default FavoritesPage