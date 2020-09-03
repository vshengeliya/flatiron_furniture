import React from 'react'
import ItemContainer from './ItemContainer'
import CartContainer from './CartContainer'
import Checkout from '../Components/Checkout'


 class ShopContainer extends React.Component{

     render(){
         return(
             <div>
             <h3>ShopContainer</h3>
             <ItemContainer/>
             <CartContainer/>
             <Checkout/>
             </div>
         )
        }
    }
    
    
export default ShopContainer