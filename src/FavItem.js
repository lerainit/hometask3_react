import React from "react";


const FavItem =(props) =>{
    return(
        <>
        
        <ul>
            <li><span>Name:</span>{props.name}</li>
            <li><span>Price:</span>{props.price}</li>
            <li><img className='image' src={props.url}   alt = 'Product '/></li>
            <li><span>Art:</span>{props.art}</li>
            </ul>
</>
)
}
export default FavItem