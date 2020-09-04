import React from 'react'
import Item from '../Components/Item'
import Checkout from '../Components/Checkout'
import CheckoutForm from '../Components/CheckoutForm'


class CartContainer extends React.Component {

    state={
        checkout:false,
        renderButtons:false
    }

    state={
        checkout:false,
        renderButtons:false
    }

    renderMyItems =()=> {
        if (this.state.checkout===false)

       { if (this.props.itemDetailsPage===false){
           
           
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
        
    } else {
            return <CheckoutForm/>
        }
    }

    renderButtons=()=>{
        if (this.props.itemDetailsPage===false && this.state.renderButtons===false){
            
           return (
           <>
                <button onClick={this.props.goBackToItems}>Back to see more items</button>
                <button onClick={this.checkOut}>Checkout</button>
          </>
           )      
        } else{
            return (
                <>
                {/* <button onClick={this.props.goBackToItems}>Back to see more items</button> */}
                {/* <button onClick={this.checkOut}>Checkout</button> */}
          </>
            )
        }
    }

    checkOut=()=>{
        console.log("checkout")
        this.setState({checkout:true}) 
        this.setState({renderButtons:true})  
        
    }
        
     render(){
         return(
             <>
             <br/>
             {this.renderButtons()}  
             {this.renderMyItems()}
             </>
         )
        }
    }
    
export default CartContainer