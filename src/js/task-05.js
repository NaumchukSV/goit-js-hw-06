const inputEl = document.querySelector("#name-input");
const spanEL = document.querySelector("#name-output");

const updateSpanFromInput = (event) => {
    const inputValue = inputEl.value;
    if (inputValue !== "") {
        spanEL.textContent = inputValue;
    }
    else {
        spanEL.textContent = "Anonymous";
    }
}


inputEl.addEventListener("input", updateSpanFromInput);