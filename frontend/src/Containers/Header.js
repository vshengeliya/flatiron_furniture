import React from "react"
import Search from "../Components/Search";
import Login from "../Components/Login";
import LoginContainer from "./LoginContainer";


class Header extends React.Component {





    render() {
        return(
            <div>
                <Search />
                <LoginContainer />
            </div>
        )
    }
}

export default Header