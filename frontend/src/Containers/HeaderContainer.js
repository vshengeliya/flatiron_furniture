import React from "react"
import Search from "../Components/Search";
import Login from "../Components/Login";
import LoginContainer from "./LoginContainer";
import "../stylesheets/HeaderContainer.css"
import UserContainer from "./UserContainer";
import {NavLink} from "react-router-dom";


class HeaderContainer extends React.Component {

    render() {
        return(
            <div className="header-container">

                <div className="search-container"><Search /></div>
                <UserContainer user={this.props.user} token={this.props.token}/>
                <div>
                    <NavLink className="header-buttons" to="/" exact activeStyle={{background: "#243e75", color: "white"}}>Home</NavLink>
                    <NavLink className="header-buttons" to="/cart" exact activeStyle={{background: "#243e75", color: "white"}}>Cart</NavLink>
                    <NavLink className="header-buttons" to="/login" exact activeStyle={{background: "#243e75", color: "white"}}>Login</NavLink>
                </div>

            </div>
        )
    }
}

export default HeaderContainer