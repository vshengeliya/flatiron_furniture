import React from 'react';
import './App.css';
import ShopContainer from "./Containers/ShopContainer"
import HeaderContainer from "./Containers/HeaderContainer";
import { Route } from 'react-router-dom'
import LoginContainer from "./Containers/LoginContainer";
import CartContainer from "./Containers/CartContainer";
import CreatAccountContainer from "./Containers/CreatAccountContainer";
import SearchResultsContainer from "./Containers/SearchResultsContainer";
class App extends React.Component {

    state = {
        user: {},
        token: null,
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

    setSearchTerm = (search) => {
        this.setState({
            search: search
        })
    }




    render() {
        return (
            <div>
                <HeaderContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState} setSearchTerm={this.setSearchTerm}/>
                <Route exact path="/" render={ () => <ShopContainer user={this.state.user} token={this.state.token}/> } />
                <Route path="/login" render={ () => <LoginContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/> } />
                <Route path="/cart" render={ () => <CartContainer user={this.state.user} token={this.state.token} /> } />
                <Route path="/create-account" render={ () => <CreatAccountContainer /> } />
                <Route path="/search" render={ () => <SearchResultsContainer /> } />
            </div>
        )
    }

}
          export default App;
