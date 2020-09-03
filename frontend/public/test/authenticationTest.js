

document.addEventListener("DOMContentLoaded", e => {

       const createUser = () => {
           const userFormContainer = document.getElementById("user-form-container")
           const button = document.createElement("button")
           button.innerText = "Create Test User"
           button.id = "button"
           userFormContainer.appendChild(button)
       }

       const clickHandler = () => {
           document.addEventListener("click", e => {

               if (e.target.id === "button") {
                   fetch('http://localhost:3000/api/v1/users/', {
                       method: 'POST',
                       headers: {
                           'Content-Type': 'application/json',
                           Accept: 'application/json'
                       },
                       body: JSON.stringify({
                           user: {
                               username: "bengarlock",
                               password: "password",
                               first_name: "Ben",
                               last_name: "Garlock",
                               address: "461 Lake Ave",
                               city: "Lyndhurst",
                               state: "NJ"
                           }
                       })
                   })
                       .then(res => res.json())
                       .then(item => console.log(item))
               } else {
                   return null
               }
           })

       }


       createUser()
       clickHandler()

})