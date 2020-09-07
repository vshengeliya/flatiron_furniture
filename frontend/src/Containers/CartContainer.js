import React from 'react'
import Item from '../Components/Item'
import Checkout from '../Components/Checkout'
import CheckoutForm from '../Components/CheckoutForm'

const cartUrl = "http://localhost:3000/api/v1/users/"

class CartContainer extends React.Component {

    state={
        checkout:false,
        renderButtons:false,
        userItems: []
    }


    componentDidMount() {
        if (this.props.token) {
            let packet = {
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${this.props.token}`
                }
            }
            fetch("http://localhost:3000/api/v1/users/" + this.props.user.id, packet)
                .then(res => res.json())
                .then(items => this.setState({userItems: items}))
        }

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

    checkOut = () => {
        this.setState({checkout:true}) 
        this.setState({renderButtons:true})  
        
    }
        
     render(){

         return(
             <div>
                 <br/>
                 {this.props.user ? this.renderButtons() : null }

             </div>
         )
        }
    }
    
export default CartContainer