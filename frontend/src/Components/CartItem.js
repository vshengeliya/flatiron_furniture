import React from 'react'
import "../stylesheets/Cart.css"

class CartItem extends React.Component {

    state = {
        quantity: 1,
        totalPrice: 0,
    }

    componentDidMount() {
        this.setState({
            quantity: this.props.cart.quantity
        })
    }

    modifyQuantity = (e) => {
        let number = this.state.quantity

        if (e.target.name === "minus") {
            if (this.state.quantity >= 1) {
                number -= 1
            }
        } else if (e.target.name === "plus") {
            number += 1
        }

        this.setState({
            quantity: number
        })

        this.updateQuantity()
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
        fetch("http://localhost:3000/carts/" + this.props.cart.id, packet)
            .then(res => res.json())
            .then(() => this.props.componentDidMount())
    }

    deleteItem = () => {
        let packet = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                Authorization: `Bearer ${this.state.token}`
            },
        }
        fetch("http://localhost:3000/carts/" + this.props.cart.id, packet)
            .then(res => res.json())
            .then(() => this.props.componentDidMount())

    }

    render(){
        return(
            <div>
                <div className="cart-image-url">
                    <table>
                        <tbody>
                            <tr>
                                <td rowSpan={5}><img src={this.props.item.image_url} alt={this.props.item.title} /></td>
                                <td className = "item-header"><h3>{this.props.item.title} - ${this.props.item.price}</h3></td>
                            </tr>
                            <tr>
                                <td className="item-text">Category: {this.props.item.category}</td>
                            </tr>

                            <tr>
                                <td className="item-text">Description: {this.props.item.description}</td>
                            </tr>
                            <tr>
                                <td className="item-text"> <div>Quantitiy: <button name="minus" onClick={this.modifyQuantity}>-</button>  {this.props.cart.quantity}  <button name="plus" onClick={this.modifyQuantity}>+</button></div></td>
                            </tr>
                            <tr>
                                <td className="item-text"> <button onClick={this.deleteItem}>delete item</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CartItem