import React from 'react'
import Item from '../Components/Item'
import ItemDetails from '../Components/ItemDetails'
import {Route} from 'react-router-dom'

 class ItemContainer extends React.Component {

    renderItems =()=> {

        if (this.props.showItem === null){

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
        //   key={this.props.item.id}
        //   image={this.props.item.image_url}
        //   title={this.props.item.title}
        //   price={this.props.item.price}
          />

        }

    }

    // renderBots=()=>{
	// 	if(this.props.showBotSpec === null){
	// 	return this.props.bots.map((bot)=><BotCard key={bot.id} bot={bot} addBot={this.props.addBot} renderBotSpecs={this.props.renderBotSpecs}/>)
	// 	}
	// 	else 
	// 	{ return <BotSpecs bot={this.props.showBotSpec}/>}
	//   }
  
     render(){   
         
         return(
             <div>
                 {this.props.listOfItems===0? <h3>Loading</h3> : this.renderItems()}   
             </div>
          )
        }
    }  
export default ItemContainer