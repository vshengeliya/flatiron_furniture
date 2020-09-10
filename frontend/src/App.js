import React from 'react';
import './App.css';
import ShopContainer from "./Containers/ShopContainer"
import HeaderContainer from "./Containers/HeaderContainer";
import { Route } from 'react-router-dom'
import LoginContainer from "./Containers/LoginContainer";
import CartContainer from "./Containers/CartContainer";
import CreatAccountContainer from "./Containers/CreatAccountContainer";
import SearchContainer from "./Containers/SearchContainer";
import Checkout from "./Containers/Checkout"
class App extends React.Component {

    state = {
        user: {},
        token: null,
        listOfItems:[],
        itemDetailsPage: true,
        showItem:null ,
        userItems:[]
    }

    setUserState = (data) => {
        if (data === "logout") {
            this.setState({
                user: {},
                token: null,
                userItems:[]
            })
        } else {
            this.setState({
                user: data.user,
                token: data.jwt,
            })
        }
    }

    showItemDetails =(obj)=>{
        this.setState({showItem:obj})
    }

    goBackToItems =()=>{
        this.setState({showItem:null})
        this.setState({itemDetailsPage:true})
        this.setState({renderButtons:false})
    }
    componentDidMount = () => {
        fetch("http://localhost:3000/items/")
            .then(resp => resp.json())
            .then(data=> this.setState({listOfItems:data}))
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3000/api/v1/profile", {
                method: "GET",
                headers: { Authorization: `Bearer ${token}`},
            })
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        user: data.user,
                        token: token})
                })
        }
    }

    addItemtoCart = (obj) => {
        if (this.state.userItems.find((item) => item.id === obj.id)) {
            return null
        } else {
            let user_id = this.state.user.id
            let obj_id = obj.id
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${this.state.token}`
                },
                body: JSON.stringify({user_id: user_id, item_id: obj_id})
            }

            fetch("http://localhost:3000/carts", options)
                .then(res => res.json())
                .then(() => this.componentDidMount())
        }
    }


    helperFunction = (items) => {
        this.setState({userItems: items})
    }

    renderTotal=()=>{
        let listOfPrices = this.state.userItems.map((item)=>item.price)
        let sum = listOfPrices.reduce((a, b)=> a+b, 0)
        return <h4>Total: ${sum}</h4>
    }

    render() {
        return (
            <div>
                <HeaderContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/>
                <Route exact path="/" render={ () =>
                    <ShopContainer
                        user={this.state.user}
                        token={this.state.token}
                        listOfItems={this.state.listOfItems}
                        itemDetailsPage={this.state.itemDetailsPage}
                        showItem={this.state.showItem}
                        showItemDetails={this.showItemDetails}
                        goBackToItems={this.goBackToItems}
                        addItemtoCart={this.addItemtoCart}
                    />
                } />
                <Route path="/login" render={ () => <LoginContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/> } />
                <Route path="/cart" render={ () =>
                    <CartContainer
                        user={this.state.user}
                        token={this.state.token}
                        itemDetailsPage={this.state.itemDetailsPage}
                        goBackToItems={this.goBackToItems}
                        userItems={this.state.userItems}
                        helperFunction={this.helperFunction}
                        renderTotal={this.renderTotal}
                        componentDidMount={this.componentDidMount}
                    /> } />
                <Route path="/create-account" render={ () => <CreatAccountContainer /> } />
                <Route path="/search" render={ () =>
                    <SearchContainer
                        showItemDetails={this.showItemDetails}
                        showItem={this.state.showItem}
                        itemDetailsPage={this.state.itemDetailsPage}
                        addItemtoCart={this.addItemtoCart}
                        goBackToItems={this.goBackToItems}
                    />
                } />
                <Route path="/checkout" render={ () => <Checkout renderTotal={this.renderTotal}/> } />
            </div>
        )
    }
}
export default App;