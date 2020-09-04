import React from 'react'
import Item from '../Components/Item'
import Checkout from '../Components/Checkout'


 class CartContainer extends React.Component {

  

    renderMyItems =()=> {

        if (this.props.itemDetailsPage===false){

       return this.props.cartItems.map((item) => 
    
            <Item 
            key={item.id} 
            title={item.title} 
            image_url={item.image_url} 
            price={item.price} 
            description={item.description}
            showItemDetails={this.showItemDetails}/>
        )
        } else{
            return null
        }
    }

    renderButtons=()=>{
        if (this.props.itemDetailsPage===false){
            
           return (
           <>
                <button>Back to see more items</button>
                <button>Checkout</button>
          </>
           )      
        } 
    }
        
     render(){
         return(
             <>
             {this.renderMyItems()}
             {this.renderButtons()}  
             </>
         )
        }
    }
    
    
export default CartContainer