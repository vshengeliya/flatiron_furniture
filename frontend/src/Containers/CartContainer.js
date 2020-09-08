import React from 'react'
import CartItem from "../Components/CartItem";

class CartContainer extends React.Component {

    state={
        userItems: []
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
                .then(user => this.setState({userItems: user.items}))
        }
    }

    renderCartItems = () => {
        return this.state.userItems.map(item => <CartItem key={item.id} item={item}/>)
    }

     render(){
         return(
             <div>
                 {this.renderCartItems()}
             </div>
         )
        }
    }
    
export default CartContainer