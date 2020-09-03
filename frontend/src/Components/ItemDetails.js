import React from 'react';

class ItemDetails extends React.Component{

  render(){
    return (


      <div>
        <img height="600" width="900" 
        src={this.props.image}
         alt={this.props.title} 
         />
        <h4>{this.props.title}</h4>
        <h5>Price: ${this.props.price}</h5>
        <p>Items details details: {this.props.description}</p> 
        <div>
            <button onClick={this.props.goBackToItems}>Go Back  </button> 
            <button>  Add item to cart</button>
        </div>
        
  
      </div>
    );

  }

}

export default ItemDetails;