
import React from 'react'


const  Modal = (props) => {
  
   

return(


<div className='modal'>
  <div className='outer_container' onClick ={props.handleClick}></div>
  <div className='modal_main_container' >
 
<button className='lose_btn' onClick ={props.handleClick}>X</button>

<p>{props.text}</p>
<button className='modal_btn' onClick ={props.addCart} >Add to cart</button>
</div>
</div>



  ) 

}


export default Modal