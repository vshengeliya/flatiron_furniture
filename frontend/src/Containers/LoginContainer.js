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


    testFetchCart = () => {
        let packet = {
            method: "GET",
            headers:{
                Authorization: `Bearer ${this.props.token}`
            }
        }
        fetch("http://localhost:3000/carts", packet)
            .then(res => res.json())
    }

    render() {
        return(
            <div>
                {this.props.user ? <div>User Logged in!{this.testFetchCart()}</div> : <LoginForm loginHandler={this.loginHandler}/>}
            </div>
        )
    }

}

export default LoginContainer