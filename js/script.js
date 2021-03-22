const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
    if (passwordCheckValue === '') {
        setErrorFor(passwordCheck, 'Password check cannot be blank');
    } else if (passwordValue !== passwordCheckValue) {
        setErrorFor(passwordCheck, 'Passwords does not mutch');
    } else {
        setSuccessFor(passwordCheck);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmail(email) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}