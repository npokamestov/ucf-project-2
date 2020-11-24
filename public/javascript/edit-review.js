async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const review_text = document.querySelector('textarea[name="review-text"]').value;

    const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            review_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/reviews/');
    } 
    else {
        console.log(review_text)
        console.log(id)
        console.log(event)
        alert(response.statusText);
    }
}

document.querySelector('.edit-review-form').addEventListener('submit', editFormHandler);