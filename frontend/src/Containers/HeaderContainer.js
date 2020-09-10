import React from "react"
import "../stylesheets/HeaderContainer.css"
import {NavLink} from "react-router-dom";



class HeaderContainer extends React.Component {

    render() {
        return(
            <div className="header-container">
                <div id="logo-banner-container" >
                    <div id="logo-container"><img src="./images/logo.jpg" alt="flatiron-logo" /></div>
                </div>
                <div>
                    <NavLink className="header-buttons" to="/login" exact activeStyle={{background: "#243e75", color: "white"}}>Login</NavLink>
                    <NavLink className="header-buttons" to="/" exact activeStyle={{background: "#243e75", color: "white"}}>Home</NavLink>
                    <NavLink className="header-buttons" to="/search" exact activeStyle={{background: "#243e75", color: "white"}}>Search</NavLink>
                    <NavLink className="header-buttons" to="/cart" exact activeStyle={{background: "#243e75", color: "white"}}>Cart</NavLink>
                    <NavLink className="header-buttons" to="/checkout" exact activeStyle={{background: "#243e75", color: "white"}}>Checkout</NavLink>
                </div>
            </div>
        )
    }
}

export default HeaderContainer