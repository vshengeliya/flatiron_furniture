import React from 'react'
import ItemContainer from './ItemContainer'
import CartContainer from './CartContainer'
import "../stylesheets/LoginContainer.css"


 class ShopContainer extends React.Component {

     render(){
        
         return(
             <div className="user-container"  >

             <ItemContainer 
             listOfItems={this.props.listOfItems} 
             addItemtoCart={this.props.addItemtoCart}
             itemDetailsPage={this.props.itemDetailsPage}
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