import React from "react"
import Search from "../Components/Search";
import Login from "../Components/Login";


class Header extends React.Component {

    state = {
        loginform: false,
        username: '',
        password: ''
    }

    render() {
        return(
            <div>
                <Search />
                <Login state={this.state}/>
            </div>
        )
    }
}

export default Header