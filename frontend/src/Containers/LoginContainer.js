import React from "react"
import LoginForm from "../Forms/LoginForm";

const itemsUrl = "http://localhost:3000/items/"

class LoginContainer extends React.Component {

    loginHandler = (userInfo) => {
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify({ user: userInfo })
        }).then(resp => resp.json())
            .then(data => this.props.setUserState(data))
    }

    render() {
        return(
            <div>
                {this.props.user ? <div>User Logged in!{this.props.user}</div> : <LoginForm loginHandler={this.loginHandler}/>}
            </div>
        )
    }

}

export default LoginContainer