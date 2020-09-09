import React from "react"
import LoginForm from "../Forms/LoginForm";
import "../stylesheets/LoginContainer.css"

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
            .then(data => {
                this.props.setUserState(data)
                localStorage.setItem("token", data.jwt)
            })
    }

    logOutHelper = () => {
        let state = "logout"
        this.props.setUserState(state)
        localStorage.clear("token")
    }

    render() {
        return(
            <div>
                {this.props.user.id ?
                    <div>
                        <div className="user-container"><h3>Welcome Back {this.props.user.first_name}</h3>
                            <div className="my-information"><h5>My Information</h5>
                            <div><h5>Address:</h5></div>
                                <div>{this.props.user.address}</div>
                                <div>{this.props.user.city}, {this.props.user.state} {this.props.user.zip_code}</div>
                                <button id="logout" onClick={this.logOutHelper}>Logout</button>
                            </div>
                        </div>

                    </div>
                    :
                    <LoginForm loginHandler={this.loginHandler}/>}
            </div>
        )
    }
}

export default LoginContainer