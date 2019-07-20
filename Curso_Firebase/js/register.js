"use strict"

const register = () => {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}