import React from 'react'
import Item from '../Components/Item'
import ItemDetails from '../Components/ItemDetails'
import "../stylesheets/ItemContainer.css"


class ItemContainer extends React.Component {

    renderItems =()=> {

        if (this.props.showItem === null){

            return this.props.listOfItems.map((item) => 
            
            <Item
            id={item.id}
            key={item.id}
            title={item.title} 
            image_url={item.image_url} 
            price={item.price} 
            description={item.description}
            showItemDetails={this.props.showItemDetails}
            />)
        } else {

            if (this.props.itemDetailsPage===true){

                return <ItemDetails 
                id={this.props.showItem.id}
                image={this.props.showItem.image_url}
                title={this.props.showItem.title}
                price={this.props.showItem.price}
                description={this.props.showItem.description}
                goBackToItems={this.props.goBackToItems}
                addItemtoCart={this.props.addItemtoCart}
                itemDetailsPage={this.props.itemDetailsPage}/>
            } else{
                return null
            } 
        }

    }
    
     render(){  
         
        // console.log("item const", this.props.showItem)
         
         return(
             <div className="rows">
                 {this.props.listOfItems===0? <h3>Loading</h3> : this.renderItems()}  

             </div>
          )
        }
    }  
export default ItemContainer