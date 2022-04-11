var email = document.getElementById('userEmail');
var password = document.getElementById('userPassword');


import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });