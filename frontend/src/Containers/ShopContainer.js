import React from 'react'
import ItemContainer from './ItemContainer'
import CartContainer from './CartContainer'


 class ShopContainer extends React.Component {

     render(){
        
         return(
             <div>

             <ItemContainer 
             listOfItems={this.props.listOfItems} 
             addItemtoCart={this.props.addItemtoCart}
             itemDetailsPage={this.props.itemDetailsPage}
            //  backFromCart={this.state.backFromCart}
             showItem={this.props.showItem}
             showItemDetails={this.props.showItemDetails}
             goBackToItems={this.props.goBackToItems}

             />
             <CartContainer 
             cartItems={this.props.cartItems} 
             itemDetailsPage={this.props.itemDetailsPage}
             goBackToItems={this.props.goBackToItems}
             
             />

             </div>
            )
        }
    }
      
export default ShopContainer