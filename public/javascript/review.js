async function commentFormHandler(event) {
    event.preventDefault();

    const review_text = document.querySelector('textarea[name="REVIEW-BODY"]').value.trim();
    const mentor_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (review_text) {
        const response = await fetch('api/REVIEWS', {
            method: 'POST',
            body: JSON.stringify({
                mentor_id,
                review_text
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
    }
}

document.querySelector('.REVIEW-FORM').addEventListener('SUBMIT', commentFormHandler);