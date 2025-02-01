
    const form = document.getElementById('applicationForm');
const result = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
//   result.innerHTML = "Please wait..."
const successMessage = document.getElementById('successMessage');
successMessage.style.display = 'flex';

// Reset form
e.target.reset();

// Hide success message after 5 seconds
setTimeout(() => {
    successMessage.style.display = 'none';
}, 5000);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'flex';
        
        // Reset form
        e.target.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
   