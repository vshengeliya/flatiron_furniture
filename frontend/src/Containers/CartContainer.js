import React from 'react'
import CartItem from "../Components/CartItem";
import "../stylesheets/LoginContainer.css"


class CartContainer extends React.Component {
    state={
        myItemList:[]
    }
    componentDidMount() {
        if (this.props.token) {
            let packet = {
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${this.props.token}`
                }
            }
            fetch("http://localhost:3000/api/v1/users/" + this.props.user.id, packet)
                .then(res => res.json())
                .then(user => this.props.helperFunction(user.items))
        }
    }

    findCart = (itemId) => {
        if (this.props.user.carts.find(cart => cart.item_id === itemId)) {
            let cart = this.props.user.carts.find(cart => cart.item_id === itemId)
            return cart
        }
    }

    renderCartItems = () => {
        if (this.props.token){
            return this.props.user.items.map(item => <CartItem
                id={item.id}
                key={item.id}
                item={item}
                cart={this.findCart(item.id)}
                deleteItem={this.deleteItem}
                componentDidMount={this.props.componentDidMount}/>)
        }
    }


    render(){
        return(
            <div className="user-container">
                <br/>
                {this.props.token ? this.props.renderTotal(): null}
                {this.renderCartItems()}
            </div>
        )
    }
}
export default CartContainer