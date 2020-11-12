async function logout() {
    const response = await fetch('/api/USERS/LOGOUT', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace('/');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('#LOGOUT').addEventListener('click', logout);