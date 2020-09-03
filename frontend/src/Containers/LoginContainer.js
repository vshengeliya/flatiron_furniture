import React from "react"
import LoginForm from "../Forms/LoginForm";

const usersUrl = "http://localhost:3000/api/v1/users/"

class LoginContainer extends React.Component {

    loginHandler = (userInfo) => {
        fetch("http://localhost:3000/api/v1/login/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify({ user: userInfo })
        }).then(resp => resp.json())
            .then(console.log)
    }

    render() {
        return(
            <div>
                <LoginForm loginHandler={this.loginHandler}/>
            </div>
        )
    }

}

export default LoginContainer