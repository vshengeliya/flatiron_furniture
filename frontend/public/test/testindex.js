const signObjectUrl = "http://127.0.0.1:3000/sign_object/"
const favoritesUrl = "http://127.0.0.1:3000/favorites/"
const usersUrl = "http://127.0.0.1:3000/users/"

document.addEventListener("DOMContentLoaded", e => {

    const renderUsers = () => {
        fetch(usersUrl)
            .then(res=> res.json())
            .then(users => users.forEach(user => renderUser(user)))
    }

    const renderUser = (user) => {
        const userContainer = document.getElementById("users-container")
        const userDiv = document.createElement("div")
        userDiv.dataset.id = user.id

        userDiv.innerHTML = `
        <p>${user.first_name}</p>        
        <button>Delete</button>
        `
        userContainer.append(userDiv)
    }

    const submitHandler = () => {
        document.addEventListener("submit", e => {
            e.preventDefault()
            if (e.target.id === "user-form"){
                const button = e.target
                submitUserForm(button)
            }
        })
    }

    const submitUserForm = (button) => {

        console.log("submit clicked")
        const form = button



        const data = {
            username: form.username.value,
            password: form.password.value,
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            address: form.address.value,
            city: form.city.value,
            state: form.state.value
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

    }

    const clickHandler = () => {
        document.addEventListener("click", e => {
            if (e.target.innerText === "Delete") {
                deleteUser(e.target)
            }
        })
    }

    const deleteUser = (e) => {
        const userId = e.parentNode.dataset.id

        const packet = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        }
        fetch(usersUrl + userId, packet)
            .then(res => res.json())


    }

    submitHandler()
    renderUsers()
    clickHandler()

})