async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
            })
            document.location.replace('/');
        }
        else {
            alert(response.statusText);
        }
    }
};

function signupLinkFormHandler(event) {
    event.preventDefault();
    window.location.replace('/signup');
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.login-form').addEventListener('button', signupLinkFormHandler);