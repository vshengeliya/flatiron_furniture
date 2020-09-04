import React from 'react';
import './App.css';
import ShopContainer from "./Containers/ShopContainer"
import HeaderContainer from "./Containers/HeaderContainer";
import { Route } from 'react-router-dom'
import LoginContainer from "./Containers/LoginContainer";
import CartContainer from "./Containers/CartContainer";


class App extends React.Component {

    state = {
        user: null,
        token: null
    }

    setUserState = (data) => {
        let user = data.user

        this.setState({
            user: user
        })
    }

    render() {
        return (
            <div>
                <HeaderContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/>
                <Route exact path="/" render={ () => <ShopContainer user={this.state.user} token={this.state.token}/> } />
                <Route path="/login" render={ () => <LoginContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/> } />
                <Route path="/cart" render={ () => <CartContainer user={this.state.user} token={this.state.token} /> } />
            </div>
        )
    }

}
          export default App;
