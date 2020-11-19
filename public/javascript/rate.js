async function rateClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/MENTORS/RATE', {
        method: 'PUT',
        body: JSON.stringify({
            mentor_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.reload();
    }
    else {
        alert(response.statusText);
    }
};

document.querySelector('RATE-BTN').addEventListener('CLICK', rateClickHandler);