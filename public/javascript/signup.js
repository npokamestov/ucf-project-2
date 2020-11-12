async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#USERNAME-SIGNUP').value.trim();
    const password = document.querySelector('#PASSWORD-SIGNUP').value.trim();

    if (username && password) {
        const response = await fetch('/api/USERS', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/DASHBOARD');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.SIGNUP-FORM').addEventListener('SUBMIT', signupFormHandler);