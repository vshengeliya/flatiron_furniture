import React from 'react';
import './App.css';
import ShopContainer from "./Containers/ShopContainer"
import HeaderContainer from "./Containers/HeaderContainer";
import { Route } from 'react-router-dom'
import LoginContainer from "./Containers/LoginContainer";
import CartContainer from "./Containers/CartContainer";
import CreatAccountContainer from "./Containers/CreatAccountContainer";


class App extends React.Component {

    state = {
        user: {},
        token: null,
        listOfItems:[],
        cartItems:[],
        itemDetailsPage: true,
        showItem:null 
    }

    setUserState = (data) => {
        
        if (data === "logout") {
            this.setState({
                user: {},
                token: null
            })
        } else {
            this.setState({
                user: data.user,
                token: data.jwt
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
    
    componentDidMount(){
        fetch("http://localhost:3000/items/")
            .then(resp => resp.json())
            .then(data=> this.setState({listOfItems:data}))

    }

    render() {
        return (
            <div>

                <HeaderContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/>
                <Route exact path="/" render={ () => 
                <ShopContainer 
                user={this.state.user} 
                token={this.state.token}
                showItemDetails={this.showItemDetails}
                listOfItems={this.state.listOfItems}
                itemDetailsPage={this.state.itemDetailsPage}
                showItem={this.state.showItem}
                showItemDetails={this.showItemDetails}
                goBackToItems={this.goBackToItems}
                /> 
                
                } />

                <Route path="/login" render={ () => <LoginContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/> } />
                <Route path="/cart" render={ () => 
                <CartContainer 
                user={this.state.user} 
                token={this.state.token}
                cartItems={this.state.cartItems}
                itemDetailsPage={this.state.itemDetailsPage}
                goBackToItems={this.goBackToItems}
                 /> } />
                <Route path="/create-account" render={ () => <CreatAccountContainer /> } />

            </div>
        )
    }

}
          export default App;
