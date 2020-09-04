import React from 'react'
import Item from '../Components/Item'
import ItemDetails from '../Components/ItemDetails'
import {Route} from 'react-router-dom'

class ItemContainer extends React.Component {

    state={showItems:null}

    showItemDetails =(obj)=>{  
        this.setState({showItems:obj})
    }

    goBackToItems =()=>{
        this.setState({showItems:null})
    }

    renderItems =()=> {

        if (this.state.showItems === null){

            return this.props.listOfItems.map((item) => 
    
            <Item 
            key={item.id} 
            title={item.title} 
            image_url={item.image_url} 
            price={item.price} 
            description={item.description}
            showItemDetails={this.showItemDetails}
            />)
        } else {

            if (this.props.itemDetailsPage===true){

                return <ItemDetails 
                key={this.state.showItems.id}
                image={this.state.showItems.image_url}
                title={this.state.showItems.title}
                price={this.state.showItems.price}
                description={this.state.showItems.description}
                goBackToItems={this.goBackToItems}
                addItemtoCart={this.props.addItemtoCart}
                itemDetailsPage={this.props.itemDetailsPage}/>
            } else{
                return null
            }


        
        }
    }
  
     render(){   
         
         return(
             <div>

                 {this.props.listOfItems===0? <h3>Loading</h3> : this.renderItems()}   
             </div>
          )
        }
    }  
export default ItemContainer