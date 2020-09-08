import React from 'react';

class ItemDetails extends React.Component{

  render(){

    return (

    <>
          <img height="600" width="900" 
          id={this.props.id}
          src={this.props.image}
           alt={this.props.title} 
           />
          <h4>{this.props.title}</h4>
          <h5>Price: ${this.props.price}</h5>
          <p>Items details details: {this.props.description}</p>
              <button onClick={this.props.goBackToItems}> Go Back </button> 
              <button onClick={()=>this.props.addItemtoCart(this.props)}> Add item to cart </button>  
          </>

    );

  }

}

export default ItemDetails;