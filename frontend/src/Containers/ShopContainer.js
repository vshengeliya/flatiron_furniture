import React from 'react'
import ItemContainer from './ItemContainer'
import CartContainer from './CartContainer'
import {Route} from 'react-router-dom'


 class ShopContainer extends React.Component {

    state={
        listOfItems:[],
        cartItems:[],
        itemDetailsPage: true,
        showItem:null 
    }
 
    showItemDetails =(obj)=>{  
        this.setState({showItem:obj})
    }
    
    goBackToItems =()=>{
        this.setState({showItem:null})
        this.setState({itemDetailsPage:true})
        this.setState({renderButtons:false})
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/items/")
            .then(resp => resp.json())
            .then(data=> this.setState({listOfItems:data}))

    }

    // componentDidMount(){
    //     fetch("http://localhost:3000/carts")
    //     .then(resp=>resp.json())
    //     .then(data=> this.setState({cartItems:data.items})//assuming we have serialized data for carts.item/items//need testing
    //     )
    // }

    addItemtoCart=(obj)=>{
    
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
        
         return(
             <div>

             <ItemContainer 
             listOfItems={this.state.listOfItems} 
             addItemtoCart={this.addItemtoCart}
             itemDetailsPage={this.state.itemDetailsPage}
             backFromCart={this.state.backFromCart}
             showItem={this.state.showItem}
             showItemDetails={this.showItemDetails}
             goBackToItems={this.goBackToItems}

             />
             <CartContainer 
             cartItems={this.state.cartItems} 
             itemDetailsPage={this.state.itemDetailsPage}
             goBackToItems={this.goBackToItems}
             
             />

             </div>
            )
        }
    }
      
export default ShopContainer