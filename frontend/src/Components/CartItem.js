import React from 'react'
import "../stylesheets/Cart.css"

class CartItem extends React.Component {

    render(){
        return(
            <div>
                <div className="cart-image-url">

                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan={3}><img src={this.props.item.image_url} /></td>
                            <td className = "item-header"><h3>{this.props.item.title}, ${this.props.item.price}</h3></td>
                        </tr>
                        <tr>
                            <td className="item-text">Category: {this.props.item.category}</td>
                        </tr>
                        <tr>
                            <td className="item-text">Description: {this.props.item.description}</td>
                        </tr>
                        <tr>
                            <td className="item-text"> <button onClick={()=>this.props.deleteItem(this.props)}>delete item</button></td>
                        </tr>
                        </tbody>
                    </table>




                </div>
            </div>
        )
    }
}

export default CartItem