import React from 'react'
import Item from '../Components/Item'


 class CartContainer extends React.Component {

     renderMyItems = () => {


         /*return this.props.cartItems.map((item) =>
              <Item
              key={item.id}
              title={item.title}
              image_url={item.image_url}
              price={item.price}
              description={item.description}
              showItemDetails={this.showItemDetails}/>
          )*/
     }


         render()
         {
             return (
                 <>
                     <h1>My Cart</h1>
                     <h3>{this.renderMyItems()}</h3>
                 </>
             )
         }

 }
    
    
export default CartContainer