import React from "react"

class NewUserForm extends React.Component {

    state = {
        verification_status: '',
        username: '',
        password: '',
        verify_password: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state: ''
    }

    onChangeHandler = (e) => {

        if (e.target.name === "username") {
            this.setState({
                username: e.target.value
            })
        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value
            })
        } else if (e.target.name === "verify_password") {
            this.setState({
                verify_password: e.target.value
            })
        } else if (e.target.name === "first_name") {
            this.setState({
                first_name: e.target.value
            })
        } else if (e.target.name === "last_name") {
            this.setState({
                last_name: e.target.value
            })
        } else if (e.target.name === "address") {
            this.setState({
                address: e.target.value
            })
        } else if (e.target.name === "city") {
            this.setState({
                city: e.target.value
            })
        } else if (e.target.name === "state") {
            this.setState({
                state: e.target.value
            })
        }

    }

    formVerification = () => {
        if (this.state.password !== this.state.verify_password) {
            this.setState({
                verification_status: "Passwords to not match"
            })
        } else {
            this.setState({
                verification_status: ''
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input name="username" type="text" placeholder="Username" onChange={this.onChangeHandler} value={this.state.username}/><br/>
                    <input name="password" type="password" placeholder="Password" onChange={this.onChangeHandler} value={this.state.password}/><br/>
                    <input name="verify_password" type="password" placeholder="Verify Password" onKeyPress={this.formVerification} onChange={this.onChangeHandler} value={this.state.verify_password}/><br/>
                    <input name="first_name" type="text" placeholder="First-name" onChange={this.onChangeHandler} value={this.state.first_name}/><br/>
                    <input name="last_name" type="text" placeholder="Last Name" onChange={this.onChangeHandler} value={this.state.last_name}/><br/>
                    <input name="address" type="text" placeholder="Address" onChange={this.onChangeHandler} value={this.state.address}/><br/>
                    <input name="city" type="text" placeholder="city" onChange={this.onChangeHandler} value={this.state.city}/><br/>
                    <input name="state" type="text" placeholder="state" onChange={this.onChangeHandler} value={this.state.state}/><br/>
                    <label>{this.state.verification_status}</label><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default NewUserForm