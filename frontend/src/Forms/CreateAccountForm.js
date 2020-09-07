import React from "react"
import "../stylesheets/LoginForm.css"


class CreateAccountForm extends React.Component {

    state = {
        verification_status: '',
        username: '',
        password: '',
        verify_password: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state: '',
        zip_code: ''
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
        } else if (e.target.name === "zip_code") {
            this.setState({
                zip_code: e.target.value
            })
        }

    }

    formVerification = (e) => {
        if (this.state.password !== this.state.verify_password) {
            this.setState({
                verification_status: "Passwords do not match"
            })
            this.onChangeHandler(e)

        } else {
            this.setState({
                verification_status: null
            })
            this.onChangeHandler(e)
        }
    }

    onSubmitHandler = (e) => {
        this.props.submitHandler(this.state, e)
    }

    render() {
        return (
            <div className="new-user-form-wrapper">
                <h3>Create a new User Account</h3>
                <form className="new-user-container" onSubmit={this.onSubmitHandler}>
                    <input name="first_name" type="text" placeholder="First-name" onChange={this.onChangeHandler} value={this.state.first_name}/>
                    <input name="last_name" type="text" placeholder="Last Name" onChange={this.onChangeHandler} value={this.state.last_name}/>
                    <input name="address" type="text" placeholder="Address" onChange={this.onChangeHandler} value={this.state.address}/>
                    <input name="city" type="text" placeholder="city" onChange={this.onChangeHandler} value={this.state.city}/>
                    <input name="state" type="text" placeholder="state" onChange={this.onChangeHandler} value={this.state.state}/>
                    <input name="zip_code" type="text" placeholder="Zip Code" onChange={this.onChangeHandler} value={this.state.zip_code}/>
                    <input name="username" type="text" placeholder="Username" onChange={this.onChangeHandler} value={this.state.username}/>
                    <input name="password" type="password" placeholder="Password" onChange={this.formVerification} value={this.state.password}/>
                    <input name="verify_password" type="password" placeholder="Verify Password" onChange={this.formVerification} value={this.state.verify_password}/><br/>
                    <label>{this.state.verification_status}</label>
                    <input className="login-form-submit" type="submit"/>
                </form>
            </div>
        )
    }
}

export default CreateAccountForm