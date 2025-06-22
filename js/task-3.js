const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputName.addEventListener('input', (event) => {
    // console.log(event.target.value)
    const name = event.target.value.trim();
    if (name === "") {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = name;
    }
});
