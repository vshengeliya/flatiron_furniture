import React from "react";
import CreateAccountForm from "../Forms/CreateAccountForm";

const usersUrl = "http://localhost:3000/api/v1/users/"

class CreatAccountContainer extends React.Component{

    submitHandler = (obj, e) => {
        e.preventDefault()

        const data = {
            user: {
                username: obj.username,
                password: obj.password,
                first_name: obj.first_name,
                last_name: obj.last_name,
                address: obj.address,
                city: obj.city,
                state: obj.state,
                zip_code: obj.zip_code
            }
        }

        const packet = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(usersUrl, packet)
            .then(res => res.json())
            .then(console.log)
    }

    render(){
        return(
            <div><CreateAccountForm submitHandler={this.submitHandler}/></div>
        )
    }
}

export default CreatAccountContainer