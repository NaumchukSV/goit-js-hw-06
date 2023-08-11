const formEl = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert("Увага! Заповніть всі поля!");
    }
    else {
    const info = {
    email: email.value,
    password: password.value,
  };
        console.log(info);
        formEl.reset();
    };
    
};

formEl.addEventListener("submit", submitHandler);
