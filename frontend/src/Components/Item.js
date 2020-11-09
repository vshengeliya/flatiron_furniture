import React from 'react';
import "../stylesheets/ItemContainer.css"

class Item extends React.Component{
  
  render(){
    
    return (

      <div className="row">
        <br/>
      
        <img height="250" width="400" 
        src={this.props.image_url} 
        alt={this.props.title} 
        onClick={()=>this.props.showItemDetails(this.props)}
        />
        
        <h4>{this.props.title}</h4>
        <h5>Price: ${this.props.price}</h5>
        <p>Item details: {this.props.description}</p>
        <br/>
        <br/>
  
      </div>
    );

  }

}

export default Item;