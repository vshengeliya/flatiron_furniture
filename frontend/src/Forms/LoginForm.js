import React from 'react'


class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'username'){
            this.setState({
                username: e.target.value
            })

        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.loginHandler(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler}/>
                    <input name="password" type="password" placeholder="Password" value={this.props.password} onChange={this.onChangeHandler}/>
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }

}

export default LoginForm