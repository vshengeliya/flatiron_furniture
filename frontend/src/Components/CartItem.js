import React from 'react'
import "../stylesheets/Cart.css"

class CartItem extends React.Component {

    state = {
        quantity: 1,
        totalPrice: 0,
    }

    modifyQuantity = (e) => {

        if (e.target.name === "minus") {
            if (this.state.quantity >= 1) {
                this.setState({
                    quantity: this.state.quantity - 1
                })
                this.updateQuantity()
            }
        } else if (e.target.name === "plus") {
            this.setState({
                quantity: this.state.quantity + 1
            })
            this.updateQuantity()
        }
    }

    updateQuantity = () => {
        let data = {
            quantity: this.state.quantity
        }

        let packet = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                Authorization: `Bearer ${this.props.token}`
            },
            body: JSON.stringify(data)
        }
        fetch("http://localhost:3000/carts/" + this.props.cartId, packet)
            .then(res => res.json())
            .then(console.log)
    }

    render(){
        return(
            <div>
                <div className="cart-image-url">
                    <table dataset={this.state.cartId}>
                        <tbody>
                            <tr>
                                <td rowSpan={5}><img src={this.props.item.image_url} alt={this.props.item.title} /></td>
                                <td className = "item-header"><h3>{this.props.item.title} {this.props.item.price}</h3></td>
                            </tr>
                            <tr>
                                <td className="item-text">Category: {this.props.item.category}</td>
                            </tr>

                            <tr>
                                <td className="item-text">Description: {this.props.item.description}</td>
                            </tr>
                            <tr>
                                <td className="item-text"> <div>Quantitiy: <button name="minus" onClick={this.modifyQuantity}>-</button>  {this.state.quantity}  <button name="plus" onClick={this.modifyQuantity}>+</button></div></td>
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