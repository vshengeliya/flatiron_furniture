import React from 'react'

class LoginForm extends React.Component {

    render() {
        return(
            <div>
                <form>
                    <input name="username" type="text" placeholder="Username" value={this.props.username} onChange={this.props.onChangeHandler}/>
                    <input name="password" type="password" placeholder="Password" value={this.props.password} onChange={this.props.onChangeHandler}/>
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }

}

export default LoginForm