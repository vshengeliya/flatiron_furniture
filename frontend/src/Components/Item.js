import React from 'react';


class Item extends React.Component{

  render(){

    console.log(this.props.item)
    return (

      <div>
        <image src={this.props.item.image_url} alt={this.props.item.title}/>
        <h4>{this.props.item.title}</h4>
        <h5>{this.props.item.price}</h5>
        <p>{this.props.item.description}</p>
  
      </div>
    );

  }

}

export default Item;