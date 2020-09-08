import React from 'react'
import CartItem from "../Components/CartItem";

class CartContainer extends React.Component {

  

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
        // console.log("redner", this.props.userItems)
    }

    deleteItem = (obj) =>{
        // console.log(obj)

        // let newArray =this.state.userItems.filter((item)=>item.id !== obj.id)
        // this.setState({userItems: newArray})


        let options={
    
            method: "DELETE",
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               Authorization: `Bearer ${this.props.token}`
           }
        //     body: JSON.stringify({user_id: user_id, item_id:obj_id})     
           }
        fetch("http://localhost:3000/carts", options)

    }
    

     render(){
        //  console.log("cart cont props", this.props)
        // console.log(this.props.userItems)
         return(
             <div>
                 { this.renderCartItems()}
             </div>
         )
        }
    }
    
export default CartContainer