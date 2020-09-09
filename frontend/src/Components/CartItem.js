import React from 'react'
import "../stylesheets/Cart.css"

class CartItem extends React.Component {

    state = {
        cartId: '',
        quantity: '',
        totalPrice: '',
    }

    componentDidMount = () => {
        console.log("cart", this.props.user)
        if (this.props.user) {
            let cartId = this.props.user.carts.find(cart => cart.item_id === this.props.item.id)
            this.setState({
                cartId: cartId.id,
                quantity: cartId.quantity,
                totalPrice: this.props.item * cartId.quantity
            })
        }
    }

    modifyQuantity = (e) => {

        let currentNumber = this.state.quantity
        if (e.target.name === "minus") {
            if (this.state.quantity > 1) {
                this.setState({
                    quantity: currentNumber - 1
                })
                this.updateQuantity(this.state.quantity)
            }
        } else if (e.target.name === "plus") {
            this.setState({
                quantity: currentNumber + 1
            })
            this.updateQuantity(this.state.quantity)
        }
    }

    updateQuantity = (number) => {
        let data = {
            quantity: number
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
        fetch("http://localhost:3000/carts/" + this.state.cartId, packet)
            .then(res => res.json())
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