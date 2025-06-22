const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    };
    if (elements.email.value.trim() === ''|| elements.password.value.trim()=== '') {
        alert('All form fields must be filled in');
    } else {
        console.log(info);
        form.reset();
    };
}