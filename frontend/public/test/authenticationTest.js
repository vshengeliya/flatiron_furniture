

document.addEventListener("DOMContentLoaded", e => {

       const createUser = () => {

           const userFormContainer = document.getElementById("user-form-container")
           const button = document.createElement("button")
           button.innerText = "Create Test User"
           userFormContainer.appendChild(button)
       }



       createUser()

})