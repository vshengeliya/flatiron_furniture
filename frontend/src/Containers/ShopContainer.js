import React from 'react'
import ItemContainer from './ItemContainer'
import CartContainer from './CartContainer'
import {Route} from 'react-router-dom'


 class ShopContainer extends React.Component {

    
 

    // componentDidMount(){
    //     fetch("http://localhost:3000/carts")
    //     .then(resp=>resp.json())
    //     .then(data=> this.setState({cartItems:data.items})//assuming we have serialized data for carts.item/items//need testing
    //     )
    // }

    addItemtoCart=(obj)=>{

        console.log("added")
    
        // let newArray=[...this.state.cartItems, obj]
        // this.setState({cartItems:newArray})
        // this.setState({itemDetailsPage:false})

        // let options={
    
        //  method: "POST",
        //  headers: {
        //    "Content-Type": "application/json"
        //  },
        //  body: JSON.stringify(obj)     
        // }
        // fetch("http://localhost:3000/carts", options)
    
    }


     render(){
        
         return(
             <div>

             <ItemContainer 
             listOfItems={this.props.listOfItems} 
             addItemtoCart={this.addItemtoCart}
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