"use strict";

const login = document.getElementById("login");

/**
 * Sign in function that handles the login process.
 *
 * @return {Promise} A promise that resolves with the response data or rejects with an error.
 */
const signIn = () => {
    const URL = "http://localhost:5678/api/users/login";

    const email     = document.getElementById("email"); 
    const password  = document.getElementById("password");
    const error     = document.getElementById("error");

    const data = {
        email: email.value,
        password: password.value
    };

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    
    fetch(URL, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Email ou mot de passe incorrect!")
            }
        })
        .then((data) => {
            const token = data.token;
            localStorage.setItem("token", token);
            document.location.href = "index.html";
        })
        .catch((err) => {
            error.textContent = err.message;
        })
}

login.addEventListener("click", (event) => {
    event.preventDefault();
    signIn();
});
