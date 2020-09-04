import React from 'react'
import ItemContainer from './ItemContainer'
import CartContainer from './CartContainer'
import {Route} from 'react-router-dom'


 class ShopContainer extends React.Component {

    state={
        listOfItems:[],
        cartItems:[],
        itemDetailsPage: true
    }

    componentDidMount(){
        fetch("http://localhost:3000/items")
        .then(resp=>resp.json())
        .then(data=> this.setState({listOfItems:data})
        )
    }

    // componentDidMount(){
    //     fetch("http://localhost:3000/carts")
    //     .then(resp=>resp.json())
    //     .then(data=> this.setState({cartItems:data.items})//assuming we have serialized data for carts.item/items//need testing
    //     )
    // }

    addItemtoCart=(obj)=>{
        console.log("added")
        console.log(obj)
        let newArray=[...this.state.cartItems, obj]
        this.setState({cartItems:newArray})
        this.setState({itemDetailsPage:false})

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
         console.log("itemdetails page state", this.state.itemDetailsPage)
         return(
             <div>
             <ItemContainer 
             listOfItems={this.state.listOfItems} 
             addItemtoCart={this.addItemtoCart}
             itemDetailsPage={this.state.itemDetailsPage}
             />
             <CartContainer cartItems={this.state.cartItems} itemDetailsPage={this.state.itemDetailsPage}/>
             </div>
            )
        }
    }
      
export default ShopContainer