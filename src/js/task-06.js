const inputEl = document.querySelector('#validation-input');

const checkInputValidity = (event) => {
    const inputValue = inputEl.value;
    if (inputValue.length === Number(inputEl.getAttribute("data-length"))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
   
};

inputEl.addEventListener("blur", checkInputValidity);