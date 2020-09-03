import React from 'react'
import Item from '../Components/Item'
import ItemDetails from '../Components/ItemDetails'
import {Route} from 'react-router-dom'

 class ItemContainer extends React.Component {

    renderItems =()=> {

        if (this.props.showItems === null){

            return this.props.listOfItems.map((item) => 
    
            <Item 
            key={item.id} 
            title={item.title} 
            image_url={item.image_url} 
            price={item.price} 
            description={item.description}
            showItemDetails={this.props.showItemDetails}
            />)
        } else {

          return <ItemDetails 
          key={this.props.showItems.id}
          image={this.props.showItems.image_url}
          title={this.props.showItems.title}
          price={this.props.showItems.price}
          description={this.props.showItems.description}
          goBackToItems={this.props.goBackToItems}

          />
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