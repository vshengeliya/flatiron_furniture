import React from 'react'
import CartItem from "../Components/CartItem";
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
    renderCartItems = () => {
        if (this.props.userItems){
            return this.props.userItems.map(item => <CartItem id={item.id} item={item} deleteItem={this.deleteItem}/>)
        }
    }
    deleteItem = (obj) =>{
        fetch("http://localhost:3000/api/v1/users/" + this.props.user.id)
            .then(resp=>resp.json())
            .then(data=>{this.setState({myItemList:data.carts})
                    let itemToDelete = this.state.myItemList.find((item)=>item.item_id ===obj.id)
                    let id = itemToDelete.id
                    let options={
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            Authorization: `Bearer ${this.props.token}`
                        }
                    }
                    fetch(`http://localhost:3000/carts/${id}`, options)
                        .then(resp=>resp.json())
                        .then(data=>{
                                fetch("http://localhost:3000/api/v1/users/" + this.props.user.id)
                                    .then(res => res.json())
                                    .then(user => {this.props.helperFunction(user.items)
                                            return this.props.userItems.map(item => <CartItem id={item.id} item={item} deleteItem={this.deleteItem}/>)
                                        }
                                    )
                            }
                        )
                }
            )
    }
    render(){
        return(
            <div>
                <br/>
                {this.props.token? this.props.renderTotal(): null}
                { this.renderCartItems()}
            </div>
        )
    }
}
export default CartContainer