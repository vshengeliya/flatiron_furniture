

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
                               username: "test4",
                               password: "test4",
                               first_name: "test",
                               last_name: "test",
                               address: "test",
                               city: "test",
                               state: "test"
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