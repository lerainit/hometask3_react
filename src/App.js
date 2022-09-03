
import './App.css';
import React, {useState} from 'react'
import Modal from './modal'
import Navigation from './Navigation';
import AppRoutes from './AppRoutes';
import Cart from './cart';

if(!localStorage.getItem('products')){(async() => {const products = await fetch('productsJSON.json').then(response => response.json())


localStorage.setItem('products',JSON.stringify(products))})()}
const initLocalStorage = () =>{
 
  let addCardsArr =[]
 
 if(!localStorage.getItem('addCards')){
 localStorage.setItem('addCards',JSON.stringify(addCardsArr))
 }
 if(!localStorage.getItem('addFavorites')){
   localStorage.setItem('addFavorites',JSON.stringify([]))
   }}
   initLocalStorage()

const  App = ()=> {

 
const [state,setState] = useState({
  isOpenModal:false,
  products: JSON.parse(localStorage.getItem('products')),
 
 text:'Are  you sure you want to add this product to cart?',
   backgroundColor:'cadetblue',
  color:'green',
  addCardsArr:JSON.parse(localStorage.getItem('addCards')),
  addFavoritesArr: JSON.parse(localStorage.getItem('addFavorites')),
  cardId:null



})

const deleteCartItem =(id) =>{

  const index = state.products.findIndex(el => id === el.id)
  console.log(state.products[index])
  state.addCardsArr.splice(state.products[index],1)
 // state.isOpenModal = false
  console.log(state.addCardsArr)
  localStorage.setItem('addCards', JSON.stringify(state.addCardsArr))
  
  return setState({...state})
}




   const openModal =(id)=>{
   console.log(id)
      return setState({...state,cardId: id,isOpenModal:true})}
 
 const addtoFavorites =(id) => {
 console.log(state.products[0].addFavorites)

    const index = state.products.findIndex(el => id === el.id)
    console.log(state.products[index].addFavorites)

    if (state.products[index].addFavorites === false) {
     state.products[index].addFavorites = true
     state.addFavoritesArr.push(state.products[index])

console.log(state.products)
console.log(state.addFavoritesArr)
      localStorage.setItem('products', JSON.stringify(state.products))
      console.log(JSON.parse(localStorage.getItem('products')))
      localStorage.setItem('addFavorites', JSON.stringify(state.addFavoritesArr))

    } else {
     state.products[index].addFavorites = false
     state.addFavoritesArr.splice(state.products[index], 1)
      localStorage.setItem('products', JSON.stringify(state.products))
      localStorage.setItem('addFavorites', JSON.stringify(state.addFavoritesArr))

    }

   return setState({...state})
  }


 const clearFavorites =()=>{console.log('clearfav')}
 const clearCart =()=>{console.log('clearcart')}

 const addCart=(id)=> {
  const index = state.products.findIndex(el => id === el.id)
  console.log(state.products[index])
  state.addCardsArr.push(state.products[index])
  state.isOpenModal = false
  console.log(state.addCardsArr)
  localStorage.setItem('addCards', JSON.stringify(state.addCardsArr))
  
  return setState({...state})
}

  return (
 <>
         

    <div className='App'>
<Navigation addCards={state.addCardsArr.length} addFavoritesPage={state.addFavoritesArr.length} />
      
       <AppRoutes products={state.products} openModal={openModal} addFavoritesFunc={addtoFavorites} deleteCartItem ={deleteCartItem}/>


       {state.isOpenModal &&
          <Modal text={state.text} backgroundColor={state.backgroundColor} color={state.color} handleClick ={() =>{setState({...state,isOpenModal:false})}}  addCart={() => { addCart(state.cardId) }}></Modal >} 


    </div>

     
    </>
  );
}


export default App

 //
 //



/*
export default App;
import './App.scss';
import React, { Component } from 'react';
import Modal from './components/modal/Modal';
import ProductPage from './components/productpage/productPage';
import initLocalStorage from './getProducts';
import PropTypes from 'prop-types'

initLocalStorage()



class App extends Component {
  state = {

    isOpenModal: false,
    products: [],
    text: 'Are  you sure you want to add this product to cart?',
    backgroundColor: 'cadetblue',
    color: 'green',
    cardId: null,
    addCardsArr: JSON.parse(localStorage.getItem('addCards')),
    addFavoritesArr: JSON.parse(localStorage.getItem('addFavorites')),



  }

  async componentDidMount() {

    const products = await fetch('productsJSON.json').then(response => response.json())

    if (!localStorage.getItem('products')) {
      this.setState((current) => {

        const newState = { ...current }
        newState.products = products
        return newState
      }

      )


      localStorage.setItem('products', JSON.stringify(products))


    } else {

      this.setState((current) => {

        const newState = { ...current }
        newState.products = JSON.parse(localStorage.getItem('products'))
        return newState
      }

      )

    }


  }

  clearCart = () => {
    localStorage.setItem('addCards', JSON.stringify([]))
    this.setState((current) => {

      const newState = { ...current }
      newState.addCardsArr = []
      return newState
    })

  }

  clearFavorites = () => {

    localStorage.setItem('addFavorites', JSON.stringify([]))
    this.setState((current) => {

      const newState = { ...current }


      newState.addFavoritesArr = []
      return newState
    })
    let productsArr = JSON.parse(localStorage.getItem('products'))

    productsArr.forEach(el => el.addFavorites = false)


    localStorage.setItem('products', JSON.stringify(productsArr))
    this.setState({ products: productsArr })
  }


  addtoFavorites = (id) => {
    this.setState((current) => {

      const newState = { ...current }

      const index = current.products.findIndex(el => id === el.id)
      if (newState.products[index].addFavorites === false) {
        newState.products[index].addFavorites = true
        newState.addFavoritesArr.push(newState.products[index])

        localStorage.setItem('products', JSON.stringify(newState.products))
        localStorage.setItem('addFavorites', JSON.stringify(newState.addFavoritesArr))

      } else {
        newState.products[index].addFavorites = false
        newState.addFavoritesArr.splice(newState.products[index], 1)
        localStorage.setItem('products', JSON.stringify(newState.products))
        localStorage.setItem('addFavorites', JSON.stringify(newState.addFavoritesArr))

      }

      return newState
    })

  }
  openModal = (id) => {

    this.setState({ isOpenModal: true, cardId: id })

  }
  addCart(id) {
  
    this.setState((current) => {

      const newState = { ...current }

      const index = newState.products.findIndex(el => id === el.id)
      console.log(newState.products)
      newState.addCardsArr.push(newState.products[index])
      newState.isOpenModal = false
      localStorage.setItem('addCards', JSON.stringify(newState.addCardsArr))
      console.log(newState.addCardsArr)
      return newState
    })
  }

  render() {
    const { text, backgroundColor, color, addCardsArr, addFavoritesArr, isOpenModal, cardId, products } = this.state


    return (

      <>

        <div className='App'>
         

          <ProductPage addCards={addCardsArr.length} addFavoritesPage={addFavoritesArr.length} products={products} openModal={this.openModal} addFavoritesFunc={this.addtoFavorites} clearFavorites={this.clearFavorites} clearCart={this.clearCart} ></ProductPage>


          </div>

          {isOpenModal && <Modal text={text} backgroundColor={backgroundColor} color={color} handleClick={() => { this.setState({ isOpenModal: false }) }} addCart={() => { this.addCart(cardId) }}></Modal>}






      </>


 )


 }




}*/

//<ProductPage addCards={state.addCardsArr.length} addFavoritesPage={state.addFavoritesArr.length} products={state.products} openModal={openModal} addFavoritesFunc={addtoFavorites} clearFavorites={clearFavorites} clearCart={clearCart} ></ProductPage>


//{state.isOpenModal &&
   //<Modal text={state.text} backgroundColor={state.backgroundColor} color={state.color} handleClick ={() =>{setState({...state,isOpenModal:false})}}  addCart={() => { addCart(state.cardId) }}></Modal >} 


//</div>
//<Cart addCards={JSON.parse(localStorage.getItem('addCards'))} deleteCartItem ={deleteCartItem}></Cart>
