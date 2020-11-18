// const { Exception } = require("handlebars");

async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#USERNAME-LOGIN').value.trim();
    const password = document.querySelector('#PASSWORD-LOGIN').value.trim();

    if(username && password) {
        const response = await fetch('/api/USERS/LOGIN', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/USER-DASHBOARD');
        }
        else {
            alert(response.statusText);
        }
    }
};

function signupLinkFormHandler(event) {
    event.preventDefault();
    window.location.replace('/SIGNUP');
};

document.querySelector('.LOGIN-FORM').addEventListener('SUBMIT', loginFormHandler);

document.querySelector('.LOGIN-FORM').addEventListener('BUTTON', signupLinkFormHandler);